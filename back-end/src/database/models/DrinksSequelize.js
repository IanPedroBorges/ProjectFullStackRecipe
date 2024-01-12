const DrinksSequelize = (sequelize, DataTypes) => {
    const Drinks = sequelize.define('Drinks', {
        idDrink: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        strDrink: DataTypes.STRING,
        strDrinkAlternate: DataTypes.STRING,
        strDrinkCategory: DataTypes.STRING,
        strAlchoholic: DataTypes.STRING,
        strGlass: DataTypes.STRING,
        strInstructions: DataTypes.STRING,
        strDrinkThumb: DataTypes.STRING,
    },
    {
        timestamps: false,
        tableName: 'drinks',
    });
    return Drinks;
};
  
module.exports = DrinksSequelize;

  