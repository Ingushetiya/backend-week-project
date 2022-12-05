const Drink = require("../Models/drinks.model");

const drinksCont = {
    getdrink: async (req, res) => {
      try {
        const drink = await Drink.find();
  
        res.json(drink);
      } catch (error) {
        res.json(message);
      }
    },
    postdrink: async (req, res) => {
      try {
        const [title, image, price, description, weight, categories] = req.body;
        const drink = await Drink.create({
          title,
          image,
          price,
          description,
          weight,
          categories,
        });
  
        res.json(drink);
      } catch (error) {
        res.json(error.message);
      }
    },
    patchdrink: async (req, res) => {
      try {
        const [title, image, price, description, weight, categories] = req.body;
  
        const drink = await Drink.findByIdAndRemove(req.params.id, {
          title,
          image,
          price,
          description,
          weight,
          categories,
        });
  
        res.json(drink);
      } catch (error) {
        res.json(error.message);
      }
    },
    deletedrink: async (req, res) => {
      try {
        const drink = await Drink.findByIdAndDelete(req.params.id);
        res.json(drink);
      } catch (error) {
        res.json(error.message);
      }
    },
  };
  
  module.exports = drinksCont;