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
  postBasket: async (req, res) => {
    try {
      const basket = await Basket.create({
        ...req.body,
      });
      res.json(basket);
    } catch (error) {
        res.json({error: error.toString()});
    }
  },

  patchBasket: async (req, res) => {
    try {
      const basket = await Basket.findByIdAndUpdate(req.params.id, {
        ...req.body,
      });
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
