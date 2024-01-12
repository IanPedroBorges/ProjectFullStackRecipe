const IngredientsSequelize = (sequelize, DataTypes) => {
    const ingredients = sequelize.define('ingredients', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        strIngredient: DataTypes.STRING,
    },
    {
        timestamps: false,
        tableName: 'ingredients',
    });
    return ingredients;
};
  
module.exports = IngredientsSequelize;

  