const express = require('express');
const productController = require('../controllers/products');
var router = express.Router();


router.route('/scrape')
    .get(productController.scrapeProductsFromWinery);

router.route('/getProductByParams/:param')
    .get(productController.getProductByTitleGenreYear);

router.route('/getProductsByGenre/:genre')
    .get(productController.getProductsByGenre);

router.route('/countProducts')
    .get(productController.countProducts);

router.route('/')
    .post(productController.createProduct)
    .get(productController.getProducts);

router.route('/topProducts/:topNumber')
    .get(productController.topProductsByRating);

router.route('/topProducts')
    .get(productController.topProductsByRating);

router.route('/title/:productTitle')
    .get(productController.getProductByTitle);

router.route('/countByGenre')
    .get(productController.countByGenre);

router.route('/countByYear')
    .get(productController.countByYear);

router.route('/productsByGenre')
    .get(productController.productsByGenre);

router.route('/:productId')
    .get(productController.getProductById)
    .patch(productController.updateProducts)
    .delete(productController.deleteProduct);



module.exports = router;