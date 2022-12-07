const Product = require("../Models/Product.model");

const productController = {
    getProduct: async (req, res) => {
      try {
        const product = await Product.find({})
  
        res.json(product)
      } catch (error) {
        res.json({error: error.toString()});
      }
    },
    postProduct: async (req, res) => {
      try {
        const product = await Product.create({
          ...req.body
        });
  
        res.json(product);
      } catch (error) {
        res.json({error: error.toString()});
      }
    },
    patchProduct: async (req, res) => {
      try {
  
        const product = await Product.findByIdAndRemove(req.params.id, {
          ...req.body
        });
  
        res.json(product);
      } catch (error) {
        res.json({error: error.toString()});
      }
    },
    deleteProduct: async (req, res) => {
      try {
        const product = await Product.findByIdAndDelete(req.params.id);
        res.json(product);
      } catch (error) {
        res.json({error: error.toString()});
      }
    },
  };
  
  module.exports = productController;