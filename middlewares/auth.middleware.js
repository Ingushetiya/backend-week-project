const jwt = require('jsonwebtoken')
const {secret} = require('../config')
module.exports=(req,res,next)=>{
    if(req.method==='OPTIONS'){
        next()
  
    }

    try {
        const token = req.headers.authorization.split(' ')[1]
        if(!token){
            return res.status(400).json({message:'войдите или зарегистрируйтесь чтобы сделать заказ!'})
        }
        const decodedToken =  jwt.verify(token,secret)
        req.user = decodedToken
        next()
    } catch (error) {
        return res.status(400).json({message:'войдите или зарегистрируйтесь чтобы сделать заказ!'})
    }
}