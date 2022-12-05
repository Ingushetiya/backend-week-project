const {Router} = require('express');
const drinksCont = require('../Controller/drinks.controller');
const route = Router();

route.get('/drink',drinksCont.getdrink);
route.post('/drink',drinksCont.postdrink);
route.patch('/drink/:id',drinksCont.patchdrink);
route.delete('/drink/:id',drinksCont.deletedrink);

module.exports = route;