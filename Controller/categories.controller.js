const Category = require("../Models/categories.model");

const categCont = {
    getCategory: async (req, res) => {
      try {
        const category = await Category.find()
  
        res.json(category);
      } catch (error) {
        res.json({error: error.toString()});
      }
    },
    postCategory: async (req, res) => {
      try {      
        const category = await Category.create({
          ...req.body
        }); 
        res.json(category);
      } catch (error) {
        res.json({error: error.toString()});
      }
    },
    patchCategory: async (req, res) => {
      try {
        const [fastfood,drinks,salads] = req.body;
  
        const category = await Category.findByIdAndRemove(req.params.id, {
            fastfood,
            salads,
            drinks
        });
  
        res.json(category);
      } catch (error) {
        res.json({error: error.toString()});
      }
    },
    deleteCategory: async (req, res) => {
      try {
        const category = await Category.findByIdAndDelete(req.params.id);
        res.json(category);
      } catch (error) {
        res.json({error: error.toString()});
      }
    },
  };
  
  module.exports = categCont;