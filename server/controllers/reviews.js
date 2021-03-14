const reviewsService = require('../services/reviews');
const productsService = require('../services/products');
const usersService = require('../services/users');

const createReview = async (req, res) => {
    const newReview = await reviewsService.createReview(req.body);
    res.json(newReview);
};


const getReviews = async (req, res) => {
    const review = await reviewsService.getReviews();
    res.json(review);
};


const getReviewsByProductId = async (req, res) => {
    const review_ids = await productsService.getReviewsByProductId(req.params.productId);

    const reviews = await reviewsService.getReviewsByIds(review_ids.reviews)

    if (!reviews){
        return res.status(404).json({errors: ['Reviews not found']});
    }

    res.json(reviews);
};


const getReviewsProductsUsers = async (req, res) => {
    const reviews = await reviewsService.getReviewsProductsUsers();
    res.json(reviews);
};


const searchReview = async (req, res) => {

    var [title, user] = req.params.param.split('=');

    if(title === ''){
        title =  null
    }

    if(user === ''){
        user =  null
    }

    const reviews = await reviewsService.searchReview(title, user);

    if (!reviews){
        return res.status(404).json({errors: ['reviews not found']});
    }

    res.json(reviews);
};


const topReviewsByDate = async (req, res) => {

    if (!req.params.topNumber){
        var topNumber = await reviewsService.countReviews();
    }
    else{
        var topNumber = req.params.topNumber;
    }

    const reviews = await reviewsService.topReviewsByDate(topNumber);
    res.json(reviews);
};


const countReviews = async (req, res) => {
    const review = await reviewsService.countReviews();
    res.json(review);
};


const getReviewById = async (req, res) => {

    const review = await reviewsService.getReviewById(req.params.id);

    if (!review){
        return res.status(404).json({errors: ['review_id not found']});
    }

    res.json(review);
};



const updateReview = async (req, res) => {

    if (!req.body) {
        res.status(400).json({
            message: "reviews param are required",
        });
    }

    const reviews = await reviewsService.updateReview(req.params.id, req.body);
    if (!reviews) {
        return res.status(404).json({ errors: ['reviews not found'] });
    }

    res.json(reviews);
};


const deleteReview = async (req, res) => {

    const reviewId = req.params.id;

    const product = await productsService.removeProductReviews([reviewId]);

    if(product.nModified===0){
        return res.status(404).json({ errors: ['cant find review on products table to update'] });
    }


    const user = await usersService.removeUserReviews([reviewId]);

    if(user.nModified===0){
        return res.status(404).json({ errors: ['cant find review on users table to update'] });
    }


    const review = await reviewsService.deleteReview(reviewId);
    if (!review) {
        return res.status(404).json({ errors: ['review not found'] });
    }

    res.send();
};


module.exports = {
    createReview,
    getReviews,
    getReviewById,
    updateReview,
    deleteReview,
    countReviews,
    topReviewsByDate,
    getReviewsByProductId,
    getReviewsProductsUsers,
    searchReview
}
