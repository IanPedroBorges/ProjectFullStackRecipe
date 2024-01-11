const router = require('express').Router();

const { MealsController } = require('../controller');

router.get('/', MealsController.getAllMeals);

module.exports = router;