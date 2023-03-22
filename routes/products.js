let express = require('express')
let router = express.Router();

let productsController = require('../controllers/products')

router.get('/products', productsController.getList)
router.get('/products/:id', productsController.getProductsById) 
router.post('/products', productsController.postProducts)



module.exports = router;