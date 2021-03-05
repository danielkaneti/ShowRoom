const express = require('express');
const productController = require('../controllers/products');
var router = express.Router();


// TODO - ADD SCRAPER METHODS


/**
 * Find products by product title, product genre, and product year
 * param - title=genre=year
 * http://localhost:8080/products/getProductByParams/:param
 */
router.route('/getProductByParams/:param')
    .get(productController.getProductByTitleGenreYear);


/**
 * Get products by genre
 * http://localhost:8080/products/getProductsByGenre/:genre
 */
router.route('/getProductsByGenre/:genre')
    .get(productController.getProductsByGenre);


/**
 * Counter of all the products
 * http://localhost:8080/products/countProducts
 */
router.route('/countProducts')
    .get(productController.countProducts);


/**
 * post - create a product
 * get - gets all products
 * http://localhost:8080/products
 */
router.route('/')
    .post(productController.createProduct)
    .get(productController.getProducts);


/**
 * Get products by input number and by average of rating
 * http://localhost:8080/products/topProducts/:topNumber
 */
router.route('/topProducts/:topNumber')
    .get(productController.topProductsByRating);

/**
 * Get all products by average of rating
 * http://localhost:8080/products/topProducts
 */
router.route('/topProducts')
    .get(productController.topProductsByRating);

/**
 * Get product by title name
 * http://localhost:8080/products/title/:productTitle
 */
router.route('/title/:productTitle')
    .get(productController.getProductByTitle);


/**
 * Count by genre
 * http://localhost:8080/products/countByGenre
 */
router.route('/countByGenre')
    .get(productController.countByGenre);

/**
 * Get products by genre
 * http://localhost:8080/products/productsByGenre
 */
router.route('/productsByGenre')
    .get(productController.productsByGenre);



/**
 * map reduce - average on number of products by year
 * http://localhost:8080/products/avgRatingByYear
 */
router.route('/avgRatingByYear')
    .get(productController.avgRatingByYear);


/**
 * get - Gets product by id
 * patch - Update product by id
 * delete - Delete product by id
 * http://localhost:8080/products/:productId
 */
router.route('/:productId')
    .get(productController.getproductById)
    .patch(productController.updateproducts)
    .delete(productController.deleteproduct);



module.exports = router;