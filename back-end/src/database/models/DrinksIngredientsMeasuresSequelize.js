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
        tableName: 'drinksIngredientsMeasures',
    });

    DrinksIngredientsMeasures.associate = (models) => {
        models.Drinks.belongsToMany(models.Ingredients, {
            as: 'strIngredient',
            through: DrinksIngredientsMeasures,
            foreignKey: 'idDrink',
            otherKey: 'idIngredient',
        });
        models.Ingredients.belongsToMany(models.Drinks, {
            as: 'strDrink',
            through: DrinksIngredientsMeasures,
            foreignKey: 'idIngredient',
            otherKey: 'idDrink',
        });
        models.Measures.belongsToMany(models.Drinks, {
            as: 'strMeasure',
            through: DrinksIngredientsMeasures,
            foreignKey: 'idMeasure',
            otherKey: 'idDrink',
        });
        models.Drinks.belongsToMany(models.Measures, {
            as: 'strDrink',
            through: DrinksIngredientsMeasures,
            foreignKey: 'idDrink',
            otherKey: 'idMeasure',
        });
    };

    return DrinksIngredientsMeasures;
};
  
module.exports = DrinksIngredientsMeasuresSequelize;