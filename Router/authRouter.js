const Router = require('express')
const router = Router()
const {authController} = require('../Controller/authController')
const {check} = require('express-validator')
const authMiddleware = require('../middlewares/auth.middleware')

router.post('/registration',[
    check('login','логин не может быть пустым').notEmpty(),
    check('password','пароль должен быть не короче 4 и не больше 10 символов').isLength({max:10,min:4})
], authController.registration)
router.post('/login', authController.login)
router.get('/users', authMiddleware, authController.users)

module.exports = router