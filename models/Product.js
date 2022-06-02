// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

class Product extends Model {}

Product.init(
  {
    id: {
      type: DataTypes.INTEGER, // product id is an interger
      primaryKey: true, // this is the primary key, being the ID
      autoIncrement: true
    },
    product_name: {
      type: DataTypes.STRING, //product name is a string
      allowNull: false
    },
    price: {
      type: DataTypes.DECIMAL(10,2), // declares decimal
      allowNull: false,
      validate: {
        isDecimal: true
      }
    },
    stock: {
      type: DataTypes.INTEGER, // display stock in an interger
      allowNull: false, // cannot be null
      defaultValue: 10,
      validate: {
        isNumeric: true
      }
    },
    category_id: {
      type: DataTypes.INTEGER, // this is the category ID as an interger
      references: {
        model: 'category',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  },
);

module.exports = Product;
