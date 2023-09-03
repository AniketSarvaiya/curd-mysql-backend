const express = require('express')
const userController = require('../controller/userControllers.js')
const routes = express.Router();

routes.post("/add", userController.registerUser);
routes.put("/update/:id", userController.updateOne);
routes.put("/delete/:id", userController.deleteone);

module.exports = routes;
