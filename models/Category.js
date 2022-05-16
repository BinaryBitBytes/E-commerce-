const { Model, DataTypes } = require('sequelize');
const { INTEGER } = require('sequelize/types');

const sequelize = require('../config/connection.js');

class Category extends Model {}

Category.init(
  {
    // define columns
    id: INTEGER,
    value: not_null, //! double check this . likely wrong
    primaryKey: Category , //! double check this . likely wrong
    use: auto_increment, //! double check this . likely wrong
    category_name, //! double check this . likely wrong
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
