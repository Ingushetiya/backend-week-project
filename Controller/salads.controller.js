const Salad = require("../Models/Salads,model");

const saladsCont = {
    getSalad: async (req, res) => {
      try {
        const salad = await Salad.find();
  
        res.json(salad);
      } catch (error) {
        res.json(message);
      }
    },
    postSalad: async (req, res) => {
      try {
        const [title, image, price, description, weight, categories] = req.body;
        const salad = await Salad.create({
          title,
          image,
          price,
          description,
          weight,
          categories,
        });
  
        res.json(salad);
      } catch (error) {
        res.json(error.message);
      }
    },
    patchSalad: async (req, res) => {
      try {
        const [title, image, price, description, weight, categories] = req.body;
  
        const salad = await Salad.findByIdAndRemove(req.params.id, {
          title,
          image,
          price,
          description,
          weight,
          categories,
        });
  
        res.json(salad);
      } catch (error) {
        res.json(error.message);
      }
    },
    deleteSalad: async (req, res) => {
      try {
        const salad = await Salad.findByIdAndDelete(req.params.id);
        res.json(salad);
      } catch (error) {
        res.json(error.message);
      }
    },
  };
  
  module.exports = saladsCont;