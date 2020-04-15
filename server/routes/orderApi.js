const {Router} = require('express');

const orderController = require('../controllers/orderController');

const router = Router();

router.get('/add', orderController.addOrderApi)

module.exports = router;
