const { json } = require("express");
const Basket = require("../Models/Basket.model");
module.exports.basketController = {
  getBasket: async (req, res) => {
    try {
      const basket = await Basket.find({});
      res.json(basket);
    } catch (error) {
      res.json({ error: error.toString() });
    }
  },
  getBasketById: async (req, res) => {
    try {
      const basket = await Basket.findOne({ userId: req.user.id });
      res.json(basket);
    } catch (error) {
      res.json({ error: error.toString() });
    }
  },
  patchBasket: async (req, res) => {
    try {
      const basket = await Basket.findOneAndUpdate(
        { userId: req.user.id },
        {
          $addToSet: {
            products: req.body.productId,
          },
        },
        { new: true }
      );
      res.json(basket);
    } catch (error) {
      res.json({ error: error.toString() });
    }
  },
  deleteBasket: async (req, res) => {

    try {
      const basket = await Basket.findOneAndUpdate({userId: req.user.id},
        {
          $pull:{
            products: {productId: req.body.productId}
          }
        }, {new:true}
        )
     res.json(basket)
    } catch (error) {
      res.json({ error: error.toString() });
    }
  },
  amountPatch: async (req, res) => {
    const { productId, type } = req.body;

    try {
      const basket = await Basket.findOne({ userId: req.user.id });
      const amount = await basket.products.map((item) => {
        if (
          item.productId.toString() === productId.toString() &&
          type === "plus"
        ) {
          item.amount += 1;
        } else if (
          item.productId.toString() === productId.toString() &&
          type === "minus"
        ) {
          item.amount -= 1;
        }
        return item;
      });
      await basket.updateOne({ products: amount })
      res.json(basket);
    } catch (error) {
      res.json({ error: error.toString() });
    }
  },
  byuProduct: async  (req, res)=>{
    try {
    //   const basket = await Basket.findOne({userId: req.user.id})
    //   res.json(basket)
    // //   const basket = await Basket.findOneAndUpdate({userId: req.user.id},
    // //     {products: []}
    // //     )
    // //  res.json(basket)
    const basket = await Basket.findOneAndUpdate(
      { userId: req.user.id },
      {
        $set: {
          products: [],
        },
      },
      { new: true }
    );
    res.json(basket)
    } catch (error) {
      res.json({ error: error.toString() });
    }
  }

};
