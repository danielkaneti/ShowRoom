const express = require('express');
const reviewController = require('../controllers/reviews');
var router = express.Router();


/**
 * Find reviews by product title, rating, and username
 * param - title=rating=username
 * http://localhost:8080/reviews/getReviewByParams/:param
 */
router.route('/getReviewByParams/:param')
    .get(reviewController.getReviewsByTitleRatingUsername)


/**
 * Search by title review, rating, user
 * param - title=rating=user
 * http://localhost:8080/reviews/searchReview/:param
 */
router.route('/searchReview/:param')
    .get(reviewController.searchReview)


/**
 * Counter of all the reviews
 * http://localhost:8080/reviews/countReviews
 */
router.route('/countReviews')
    .get(reviewController.countReviews);


/**
 * Get all reviews sort by desc date
 * http://localhost:8080/reviews/latestReviews
 */
router.route('/latestReviews')
    .get(reviewController.topReviewsByDate);


/**
 * Get reviews by input number and sorting by date desc
 * http://localhost:8080/reviews/latestReviews/:topNumber
 */
router.route('/latestReviews/:topNumber')
    .get(reviewController.topReviewsByDate);


/**
 * Get reviews by product id input
 * http://localhost:8080/reviews/getReviewsByProductId/:productId
 */
router.route('/getReviewsByProductId/:productId')
    .get(reviewController.getReviewsByProductId)


/**
 * Get all reviews with her products and the users
 * http://localhost:8080/reviews/getReviewsProductsUsers
 */
router.route('/getReviewsProductsUsers')
    .get(reviewController.getReviewsProductsUsers)


/**
 * post - Create a review
 * get - Gets all reviews
 * http://localhost:8080/reviews
 */
router.route('/')
    .post(reviewController.createReview)
    .get(reviewController.getReviews);


/**
 * get - Get review by id
 * delete - Delete review by id
 * patch - Update review by id
 * http://localhost:8080/reviews/:id
 */
router.route('/:id')
    .get(reviewController.getReviewById)
    .delete(reviewController.deleteReview)
    .patch(reviewController.updateReview);


module.exports = router;