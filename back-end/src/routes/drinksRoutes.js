const router = require('express').Router();

const { DrinksController } = require('../controller');

router.get('/', DrinksController.getAllDrinks);

module.exports = router;