const express = require('express');
const reviewController = require('../controllers/reviews');
var router = express.Router();

router.route('/searchReview/:param')
    .get(reviewController.searchReview)

router.route('/countReviews')
    .get(reviewController.countReviews);

router.route('/latestReviews')
    .get(reviewController.topReviewsByDate);

router.route('/latestReviews/:topNumber')
    .get(reviewController.topReviewsByDate);

router.route('/getReviewsByProductId/:productId')
    .get(reviewController.getReviewsByProductId)

router.route('/getReviewsProductsUsers')
    .get(reviewController.getReviewsProductsUsers)

router.route('/')
    .post(reviewController.createReview)
    .get(reviewController.getReviews);

router.route('/:id')
    .get(reviewController.getReviewById)
    .delete(reviewController.deleteReview)
    .patch(reviewController.updateReview);


module.exports = router;