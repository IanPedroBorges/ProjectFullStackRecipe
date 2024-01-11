const router = require('express').Router();

const { DrinksController } = require('../controller');

router.get('/', DrinksController.getAllDrinks);
router.get('/categories', DrinksController.getDrinksAllCategories);

module.exports = router;