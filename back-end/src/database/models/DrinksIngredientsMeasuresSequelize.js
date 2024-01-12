const DrinksIngredientsMeasuresSequelize = (sequelize, DataTypes) => {
    const DrinksIngredientsMeasures = sequelize.define('DrinksIngredientsMeasures', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        idDrink: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        idIngredient: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        idMeasure: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        timestamps: false,
        tableName: 'drinks_ingredients_measures',
    });

    DrinksIngredientsMeasures.associate = (models) => {
        models.Drinks.hasMany(models.Ingredients, {
            as: 'strIngredient',
            through: DrinksIngredientsMeasures,
            foreignKey: 'idDrink',
            otherKey: 'id',
        });
        models.Ingredients.belongsToMany(models.Drinks, {
            as: 'strDrink',
            through: DrinksIngredientsMeasures,
            foreignKey: 'id',
            otherKey: 'idDrink',
        });
        models.Measures.belongsToMany(models.Drinks, {
            as: 'strDrink',
            through: DrinksIngredientsMeasures,
            foreignKey: 'id',
            otherKey: 'idDrink',
        });
        models.Drinks.hasMany(models.Measures, {
            as: 'strMeasure',
            through: DrinksIngredientsMeasures,
            foreignKey: 'idDrink',
            otherKey: 'id',
        });
    };

    return DrinksIngredientsMeasures;
};
  
module.exports = DrinksIngredientsMeasuresSequelize;