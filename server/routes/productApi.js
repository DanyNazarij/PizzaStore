const {Router} = require('express')

const productController = require('../controllers/productController');


const router = Router();

router.post('/add', productController.AddProductApi);
router.post('/getAll', productController.GetProductsAll);

module.exports = router;
