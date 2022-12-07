const Router = require('express')
const { basketController } = require('../Controller/basket.controller')
const router = Router()

router.get('/basket', basketController.getBasket)
router.post('/basket', basketController.postBasket)
router.patch('/basket/:id', basketController.patchBasket)
router.delete('/basket/:id', basketController.deleteBasket)

module.exports = router