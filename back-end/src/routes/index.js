const router = require('express').Router();

router.use('/meals', require('./mealsRoutes'));
router.use('/drinks', require('./drinksRoutes'));

module.exports = router;