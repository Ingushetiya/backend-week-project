const Router = require('express')
const { basketController } = require('../Controller/basket.controller')
const authMiddleware = require('../middlewares/auth.middleware')
const router = Router()

router.get('/basket', basketController.getBasket)
router.get('/basket/user', authMiddleware, basketController.getBasketById)
router.patch('/basket/:id', basketController.patchBasket)
router.delete('/basket/:id', basketController.deleteBasket)
// router.post('/basket', basketController.postBasket)

module.exports = router