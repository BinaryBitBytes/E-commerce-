const { Model, DataTypes } = require('sequelize');
//const { INTEGER } = require('sequelize/types');

const sequelize = require('../config/connection.js');

class Category extends Model {}

Category.init(
  {
    // define columns
    id:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      auto_increment: true,
    },
    category_name:{
      type: DataTypes.STRING,
      allowNull: false
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
