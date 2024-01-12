const MealsIngredientsMeasuresSequelize = (sequelize, DataTypes) => {
    const MealsIngredientsMeasures = sequelize.define('MealsIngredientsMeasures', {
        idMeal: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
        },
        idIngredient: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
        },
        idMeasure: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
        },
    },
    {
        timestamps: false,
        tableName: 'meals_ingredients_measures',
    });

    MealsIngredientsMeasures.associate = (models) => {
        models.Meals.belongsToMany(models.Ingredients, {
            as: 'strIngredient',
            through: MealsIngredientsMeasures,
            foreignKey: 'idMeal',
            otherKey: 'idIngredient',
        });
        models.Ingredients.belongsToMany(models.Meals, {
            as: 'strMeal',
            through: MealsIngredientsMeasures,
            foreignKey: 'idIngredient',
            otherKey: 'idMeal',
        });
        models.Measures.belongsToMany(models.Meals, {
            as: 'strMeasure',
            through: MealsIngredientsMeasures,
            foreignKey: 'idMeasure',
            otherKey: 'idMeal',
        });
        models.Meals.belongsToMany(models.Measures, {
            as: 'strMeal',
            through: MealsIngredientsMeasures,
            foreignKey: 'idMeal',
            otherKey: 'idMeasure',
        });
    };

    return MealsIngredientsMeasures;
};
  
module.exports = MealsIngredientsMeasuresSequelize;

  