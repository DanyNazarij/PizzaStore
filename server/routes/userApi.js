const {Router} = require('express');

const userController = require('../controllers/userController');

const router = Router();

router.get('/add', userController.addUserApi)
router.get('/update', userController.update);
router.get('/orders', userController.getOrders)

module.exports = router;
