const {Router} = require('express');

const userController = require('../controllers/userController');

const router = Router();

router.post('/add', userController.addUserApi)
router.get('/update', userController.update);
router.get('/orders', userController.getOrders)
router.post('/check', userController.checkUser)

module.exports = router;
