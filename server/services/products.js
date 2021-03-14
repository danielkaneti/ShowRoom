const Products = require('../models/products');

const createProduct = async (body) => {
    const product = new Products({
        title: body.title,
        year: body.year,
        genre: body.genre,  // delimiter ','
        description: body.description,
        image_url: body.image_url,
        trailer_video: body.trailer_video
    });
    return await product.save();
};

const getProducts = async () => {
    return Products.aggregate([
        {
            $lookup:
                {
                    from:"reviews",
                    localField:"reviews",
                    foreignField: "_id",
                }
        },
        {
            $project:
                {
                    '_id':1,
                    'title':2,
                    'year':3,
                    'genre':4,
                    'description':5,
                    'image_url':6,
                    'trailer_video':7,
                }
        }])
};





const countProducts = async () => {
    return await Products.countDocuments({})
};


const countByGenre = async () => {
    return Products.aggregate([
        {
            $group: {
                _id: "$genre",
                count: {$sum: 1}
            }
        },
        {
            $sort: {count:-1}
        },
        {
            $limit:6
        }
    ]);
};

const countByYear = async () => {
    return Products.aggregate([
        {
            $group: {
                _id: "$year",
                count: {$sum: 1}
            }
        },
        {
            $sort: {count:-1}
        },
        {
            $limit:6
        }
    ]);
};


const productsByGenre = async () => {
    return Products.aggregate([
        {
            $group: {
                _id: "$genre",
                products: { $push: "$title" }
            }
        }
    ]);
};





const getProductByTitle = async (title) => {
    return await Products.find({'title': {$regex: `.*${title}.*`, $options:'i'}});
};


const getProductsByGenre = async (genre) => {
    return await Products.find({'genre': {$regex: `.*${genre}.*`, $options:'i'}});
};


const getProductById = async (id) => {
    return await Products.findById(id);
};


const getReviewsByProductId = async (id) => {
    return await Products.findById(id,{'_id':0, 'reviews':1});
};


const getProductByTitleGenreYear = async (title=null, genre=null, year=NaN) => {

    var match = {};

    if(title!==null){
        match["title"] = new RegExp(title,'i')
    }

    if(isNaN(year)!==true){
        match["year"] = {$eq:parseInt(year)};
    }

    if(genre!==null){
        match["genre"] = new RegExp(genre, 'i')
    }

    var query = [
        {
            $lookup:
                {
                    from:"reviews",
                    localField:"reviews",
                    foreignField: "_id",
                }
        },
        {
            $project:
            {
                "_id": 1,
                "title": 2,
                "year": 3,
                "genre": 4,
                "description": 5,
                "image_url": 6,
                "trailer_video": 7,
            }
        },
        {
            $project:
                {
                    "_id": 1,
                    "title": 2,
                    "year": 3,
                    "genre": 4,
                    "description": 5,
                    "image_url":6,
                    "trailer_video":7,

                }
        },
        {
            $match:match
        }
    ]

    return Products.aggregate(query);
};


const updateProduct = async (id, body) => {
    const product = await getProductById(id);
    if (!product)
        return null;

    product.title = body.title;
    product.year = body.year;
    product.genre = body.genre;
    product.description = body.description;
    product.image_url = body.image_url;
    product.trailer_video = body.trailer_video;
    await product.save();
    return product;
};

const updateReviewOfProduct = async (id, review) => {

    const product = await getProductById(id);
    if (!product)
        return null;

    if(!review)
        return null

    if(product.reviews.indexOf(review._id) === -1){
        product.reviews.push(review._id);
    }
    await product.save();

    return product;
};



const deleteProduct = async (id) => {
    const product = await getProductById(id);
    if (!product)
        return null;

    await product.remove();
    return product;
};


const removeProductReviews = async (review_ids) => {

    return Products.update({},{$pull:{"reviews":{$in:review_ids}}},{multi:true});
};


module.exports = {
    createProduct,
    getProducts,
    getProductByTitle,
    getProductById,
    updateProduct,
    updateReviewOfProduct,
    deleteProduct,
    getProductByTitleGenreYear,
    countProducts,
    getReviewsByProductId,
    getProductsByGenre,
    countByGenre,
    countByYear,
    removeProductReviews,
    productsByGenre
    }