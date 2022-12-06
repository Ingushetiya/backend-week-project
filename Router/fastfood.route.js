const {Router} = require('express');
const fastfoodCont = require('../Controller/fastfood.controller');
const route = Router();

route.get('/fastfood',fastfoodCont.getfastfood);
route.post('/fastfood',fastfoodCont.postfastfood);
route.patch('/fastfood/:id',fastfoodCont.patchfastfood);
route.delete('/fastfood/:id',fastfoodCont.deletefastfood);

module.exports = route;