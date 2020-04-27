const {Router} = require('express')

const productController = require('../controllers/productController');


const router = Router();

<<<<<<< HEAD
router.post('/add', productController.AddProductApi);
=======
router.get('/add', productController.AddProductApi);
>>>>>>> 0eb9ce3... NazarCommit
router.post('/getAll', productController.GetProductsAll);
router.post('/getByIds', productController.getByIds);

module.exports = router;
