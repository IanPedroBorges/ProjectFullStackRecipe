const MealsSequelize = (sequelize, DataTypes) => {
    const Meals = sequelize.define('Meals', {
        idMeal: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        strMeal: DataTypes.STRING,
        strDrinkAlternate: DataTypes.STRING,
        strCategory: DataTypes.STRING,
        strArea: DataTypes.STRING,
        strInstructions: DataTypes.STRING,
        strMealThumb: DataTypes.STRING,
        strTags: DataTypes.STRING,
        strYoutube: DataTypes.STRING,
    },
    {
        timestamps: false,
        tableName: 'meals',
    });
    return Meals;
};
  
module.exports = MealsSequelize;

  