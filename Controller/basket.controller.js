const Basket = require("../Models/Basket.model");
module.exports.basketController = {
 getBasket: async (req, res) => {
    try {
      const basket = await Basket.find({});
      res.json(basket);
    } catch (error) {
      res.json({error: error.toString()});
    }
  },
  getBasketById: async (req, res)=>{

    try {
      const basket = await Basket.findOne({userId: req.user.id})
      console.log(req.user.id);
      res.json(basket)
    } catch (error) {
      res.json({error: error.toString()})
    }
  },
  patchBasket: async (req, res) => {
    try {
      const basket = await Basket.findByIdAndUpdate(req.params.id, {
       $addToSet: {
        products: req.body.products
       }
      }, {new: true});
      res.json(basket);
    } catch (error) {
        res.json({error: error.toString()});
    }
  },
  deleteBasket: async (req, res) => {
    try {
      const basket = await Basket.findByIdAndRemove(req.params.id, {
        ...req.body,
      });
      res.json(basket);
    } catch (error) {
        res.json({error: error.toString()});
    }
  },
};

        // postBasket: async (req, res) => {
        //   const {productId, userId} = req.body
        //   try {
        //     const basket = await Basket.create({
        //       userId: userId,
      
              
        //     });
        //     res.json(basket);
        //   } catch (error) {
        //       res.json({error: error.toString()});
        //   }
        // },