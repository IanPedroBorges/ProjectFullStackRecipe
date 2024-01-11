const router = require('express').Router();

const { MealsController } = require('../controller');

router.get('/', MealsController.getAllMeals);
router.get('/categories', MealsController.getMealsAllCategories);

module.exports = router;