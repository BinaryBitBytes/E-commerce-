const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Category extends Model {}

Category.init(
  {
    // define columns
    id:{
      allowNull: false,
      type: DataTypes.INTEGER, // declared id type as an interger
      primaryKey: true, //made primary key
      auto_increment: true, // auto incremented the ID
    },
    category_name:{
      type: DataTypes.STRING, // declared category name as a string
      allowNull: false
    },
  },
  {
    sequelize, // using sequelize
    timestamps: false,
    freezeTableName: true, // freeze table names
    underscored: true,
    modelName: 'category', //declaring model name as a category
  }
);

module.exports = Category;
