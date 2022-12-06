const {Router} = require('express');
const productController = require('../Controller/product.controller');
const route = Router();

route.get('/product',productController.getProduct);
route.post('/product',productController.postProduct);
route.patch('/product/:id',productController.patchProduct);
route.delete('/product/:id',productController.deleteProduct);

module.exports = route;