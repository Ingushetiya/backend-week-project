const Router = require("express");
const { basketController } = require("../Controller/basket.controller");
const authMiddleware = require("../middlewares/auth.middleware");
const router = Router();

router.get("/basket", basketController.getBasket);

router.get("/basket/user", authMiddleware, basketController.getBasketById);
router.patch("/basket/add", authMiddleware, basketController.patchBasket);
router.patch("/basket/remove", authMiddleware, basketController.deleteBasket);
router.patch("/basket/amount", authMiddleware, basketController.amountPatch);
router.patch("/basket/buy", authMiddleware, basketController.byuProduct);
// router.post('/basket', basketController.postBasket)

module.exports = router;
