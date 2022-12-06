const {Router} = require('express');
const categCont = require('../Controller/categories.controller');
const route = Router();

route.get('/category',categCont.getCategory);
route.post('/category',categCont.postCategory);
route.patch('/category/:id',categCont.patchCategory);
route.delete('/category/:id',categCont.deleteCategory);

module.exports = route;