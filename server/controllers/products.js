

const _ = require("lodash");
const productsService = require('../services/products');
const reviewsService = require('../services/reviews');
const userService = require('../services/users');
const scrapeService = require('../services/scraper');
const fs = require('fs');
const Papa = require('papaparse');

const createProduct = async (req, res) => {
    const newProduct = await productsService.createProduct(req.body);
    res.json(newProduct);
};


const topProductsByRating = async (req, res) => {

    var topNumber;

    if (!req.params.topNumber){
        topNumber = await productsService.countProducts();
    }
    else{
        topNumber = req.params.topNumber;
    }

    const products = await productsService.topProductsByRating(topNumber);
    
    res.json(calcRatingAvg(products));
};


function roundToTwo(num) {
    return +(Math.round(num + "e+2")  + "e-2");
}


const getProducts = async (req, res) => {
    const products = await productsService.getProducts();

    products.forEach(function (productItem) {
        Object.defineProperty(productItem, "rating_avg",
            Object.getOwnPropertyDescriptor(productItem, "rating_review"));
        delete productItem["rating_review"];

        var newArray = []
        productItem["rating_avg"].forEach(function (arrayItem) {
            newArray.push(arrayItem['rating'])
        });
        productItem["rating_avg"] = newArray

        productItem["rating_avg"] = average = productItem["rating_avg"].reduce(function (avg, value, _, { length }) {
            return roundToTwo(avg + value / length);
        }, 0);
    });

    res.json(products);
};


const calcRatingAvg = (rating) => {
    rating.forEach(function (item) {

        Object.defineProperty(item, "rating_avg",
            Object.getOwnPropertyDescriptor(item, "rating_review"));
        delete item["rating_review"];

        if(item["rating_avg"].length){
            item["rating_avg"] = roundToTwo(item["rating_avg"][0]["rating"])
        }
        else{
            item["rating_avg"] = 0
        }
    });
    return rating;
};



const avgRatingByYear = async (req, res) => {
    const ratingByYears = await productsService.avgRatingByYear();

    const avgRatingByYear = await avgRatingMapReduce(ratingByYears, 'year');

    res.json(avgRatingByYear);
};


const avgRatingMapReduce = async (obj, keyMap) => {

    var map = _.mapValues(_.groupBy(obj, keyMap),
        clist => clist.map(obj => _.omit(obj, keyMap)));

    var data = {};
    Object.keys(map).forEach(function(key) {
        var newArray = []
        map[key].forEach(function (arrayItem) {
            newArray.push(arrayItem['rating_review']['rating'])
        });
        data[key] = newArray
    });

    var reduce = []
    Object.keys(data).forEach(function (key){
        var avg_value = average = data[key].reduce(function (avg, value, _, { length }) {
            return avg + value / length;
        }, 0);
        reduce.push({'year':key, 'avg_count': roundToTwo(avg_value)})
    });

    return reduce
}


const countProducts = async (req, res) => {
    const products = await productsService.countProducts();
    res.json(products);
};


const countByGenre = async (req, res) => {
    const genresCount = await productsService.countByGenre();

    var newGenresCount = []
    Object.keys(genresCount).forEach(function(key) {
        newGenresCount.push({'genre': genresCount[key]['_id'], 'count': genresCount[key]['count']})
    });
    res.json(newGenresCount);
};


const productsByGenre = async (req, res) => {
    const productsByGenre = await productsService.productsByGenre();

    var newGenresCount = []
    Object.keys(productsByGenre).forEach(function(key) {
        newGenresCount.push({'genre': productsByGenre[key]['_id'], 'products': productsByGenre[key]['products']})
    });
    res.json(newGenresCount);
};


const getProductByTitle = async (req, res) => {
    const product = await productsService.getProductByTitle(req.params.productTitle);

    if (!product) {
        return res.status(404).json({errors: ['Product not found']});
    }

    res.json(product);
};


const getProductsByGenre = async (req, res) => {
    const product = await productsService.getProductsByGenre(req.params.genre);

    if (!product) {
        return res.status(404).json({errors: ['Product not found']});
    }

    res.json(product);
};


const getProductById = async (req, res) => {
    const product = await productsService.getProductById(req.params.productId);
    if (!product){
        return res.status(404).json({errors: ['Product not found']});
    }

    res.json(product);
};


const getProductByTitleGenreYear = async (req, res) => {

    var [productTitle, productGenre, productYear] = req.params.param.split('=');

    if(productTitle === ''){
        productTitle =  null
    }

    if(productGenre === ''){
        productGenre =  null
    }

    if(productYear === ''){
        productYear =  NaN
    }

    const products = await productsService.getProductByTitleGenreYear(
        productTitle, productGenre, productYear
    );
    if (!products) {
        return res.status(404).json({errors: ['Products are not found']});
    }
    else{
        res.json(calcRatingAvg(products));
    }
};


const updateProducts = async (req, res) => {
    if (!req.body) {
        res.status(400).json({
            message: "products param are required",
        });
    }

    const products = await productsService.updateProduct(req.params.productId, req.body);
    if (!products) {
        return res.status(404).json({ errors: ['products not found'] });
    }

    res.json(products);
};



const deleteProduct = async (req, res) => {

    // remove product reviews
    const review_ids = await productsService.getReviewsByProductId(req.params.productId);
    review_ids["reviews"].forEach(function (reviewId) {
        const review = reviewsService.deleteReview(reviewId);
        if (!review){
            return res.status(404).json({ errors: ['review not found for deleted'] });
        }

    });


    // remove product
    const product = await productsService.deleteProduct(req.params.productId);
    if (!product) {
        return res.status(404).json({ errors: ['product not found'] });
    }


    // remove user reviews
    const user = userService.removeUserReviews(review_ids["reviews"]);

    if(user.nModified===0){
        return res.status(404).json({ errors: ['cant find review on users table to update'] });
    }


    res.send();
};


const scrapeProducts = async (req, res) => {
    const file = fs.createReadStream(req.params[0].split("=")[1]);
    var count = 0; // cache the running count
    Papa.parse(file, {
        step:function(result) {
            result.data.forEach(async function (imdbID) {
                var product = await getProduct(imdbID);
                if(product){
                    var newProducts = await productsService.createProduct(product);
                    return await newProducts;
                }
            });
        },
        complete: function(results, file) {
            console.log('parsing complete read', count, 'records.');
        }
    });
};


async function getProduct (imdbID)  {

    return new Promise((resolve,reject)=>{
        scrapeService.getProduct(imdbID)
            .then( response => resolve(response));
    });
}


module.exports = {
    createProduct,
    getProducts,
    getProductByTitle,
    getProductById,
    updateProducts,
    deleteProduct,
    getProductByTitleGenreYear,
    countProducts,
    topProductsByRating,
    getProductsByGenre,
    countByGenre,
    avgRatingByYear,
    getProduct,
    productsByGenre,
    scrapeProducts
}