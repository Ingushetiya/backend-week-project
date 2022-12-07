const { Router } = require('express')
const router = Router()
router.use(require('./basket.route'))
router.use(require('./categories.route'))
router.use(require('./product.route'))
module.exports = router