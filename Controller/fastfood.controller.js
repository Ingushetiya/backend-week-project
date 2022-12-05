const Fastfood = require("../Models/Fastfood.model");

const fastfoodCont = {
  getfastfood: async (req, res) => {
    try {
      const fastfood = await Fastfood.find();

      res.json(fastfood);
    } catch (error) {
      res.json(message);
    }
  },
  postfastfood: async (req, res) => {
    try {
      
      const fastfood = await Fastfood.create({
       ...req.body
      });

      res.json(fastfood);
    } catch (error) {
      res.json(error.message);
    }
  },
  patchfastfood: async (req, res) => {
    try {
      const [title, image, price, description, weight, categories] = req.body;

      const fastfood = await Fastfood.findByIdAndRemove(req.params.id, {
        title,
        image,
        price,
        description,
        weight,
        categories,
      });

      res.json(fastfood);
    } catch (error) {
      res.json(error.message);
    }
  },
  deletefastfood: async (req, res) => {
    try {
      const fastfood = await Fastfood.findByIdAndDelete(req.params.id);
      res.json(fastfood);
    } catch (error) {
      res.json(error.message);
    }
  },
};

module.exports = fastfoodCont;