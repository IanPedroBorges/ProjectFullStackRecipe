const MeasuresSequelize = (sequelize, DataTypes) => {
    const Measures = sequelize.define('Measures', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        strMeasure: DataTypes.STRING,
    },
    {
        timestamps: false,
        tableName: 'measures',
    });
    return Measures;
};
  
module.exports = MeasuresSequelize;

  