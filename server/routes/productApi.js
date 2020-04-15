const {Router} = require('express')

const productController = require('../controllers/productController');


const router = Router();

router.get('/apiProduct/add', productController.AddProductApi);

module.exports = router;
