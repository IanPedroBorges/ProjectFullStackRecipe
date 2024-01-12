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
            otherKey: 'id',
        });
        models.Ingredients.belongsToMany(models.Meals, {
            as: 'strMeal',
            through: MealsIngredientsMeasures,
            foreignKey: 'id',
            otherKey: 'idMeal',
        });
        models.Measures.belongsToMany(models.Meals, {
            as: 'strMeal',
            through: MealsIngredientsMeasures,
            foreignKey: 'id',
            otherKey: 'idMeal',
        });
        models.Meals.belongsToMany(models.Measures, {
            as: 'strMeasure',
            through: MealsIngredientsMeasures,
            foreignKey: 'idMeal',
            otherKey: 'id',
        });
    };

    return MealsIngredientsMeasures;
};
  
module.exports = MealsIngredientsMeasuresSequelize;

  