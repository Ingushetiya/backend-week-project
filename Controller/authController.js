const User = require("../models/User.model");
const Basket = require("../Models/Basket.model");
const bcrypt = require("bcryptjs");
const { validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const { secret } = require("../config");

const generateAccesToken = (id, login) => {
  const payload = {
    id,
    login,
  };
  return jwt.sign(payload, secret, { expiresIn: "24h" });
};

module.exports.authController = {
  registration: async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res
          .status(400)
          .json({ message: "ошибка при регистрации", errors });
      }
      const { login, password } = req.body;
      const candidate = await User.findOne({ login });
      if (candidate) {
        return res
          .status(400)
          .json({ message: "пользователь с таким логином уже существует" });
      }
      const hashedPassword = bcrypt.hashSync(password, 7);

      const user = new User({ login, password: hashedPassword });
      
      await user.save();

      await Basket.create({
        userId: user._id,
      });
      return res.json({ message: "успешная регистрация" });
    } catch (error) {
      console.log(errror);
      res.sratus(400).json({ message: "ошибка регистрации" });
    }
  },
  login: async (req, res) => {
    try {
      const { login, password } = req.body;
      const user = await User.findOne({ login });
      if (!user) {
        return res.status(400).json({ message: "пользователь  не найден" });
      }
      const validationPassword = bcrypt.compareSync(password, user.password);
      if (!validationPassword) {
        return res.status(400).json({ message: "неправильный пароль" });
      }
      const token = generateAccesToken(user._id, user.login);

      return res.json({ login, token });
    } catch (error) {
      res.json(error.message);
    }
  },
  users: async (req, res) => {
    try {
      res.json("drdzrxt");
    } catch (error) {
      res.json(error.message);
    }
  },
};
