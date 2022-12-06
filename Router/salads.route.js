const {Router} = require('express');
const saladsCont = require('../Controller/salads.controller');
const route = Router();

route.get('/salad',saladsCont.getSalad);
route.post('/salad',saladsCont.postSalad);
route.patch('/salad/:id',saladsCont.patchSalad);
route.delete('/salad/:id',saladsCont.deleteSalad);

module.exports = route;