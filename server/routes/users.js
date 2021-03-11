const express = require('express');
const userController = require('../controllers/users');
var router = express.Router();

router.route('/getUserByParam/:param')
    .get(userController.getUserByParam);

router.route('/updateReviewOfUser/:id')
    .patch(userController.updateReviewOfUser);

router.route('/')
    .post(userController.createUser)
    .get(userController.getUsers);

router.route('/countUsers')
    .get(userController.countUsers);

router.route('/getUsername/:username')
    .get(userController.getByUsername)

router.route('/getUserByEmail/:email')
    .get(userController.getUserByEmail)

router.route('/login')
    .post(userController.login)

router.route('/getUserById/:id')
    .get(userController.getOnlyUserById)

router.route('/:id')
    .get(userController.getUserById)
    .delete(userController.deleteUser)
    .patch(userController.updateUser);


module.exports = router;

