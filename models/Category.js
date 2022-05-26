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
      allowNull: false //! double check this . likely wrong
    },
    category_name:{
      type: DataTypes.STRING,
    } //! double check this . likely wrong
    // value:{
    //   type: DataTypes.INTEGER
    // }, //! double check this . likely wrong
    //primaryKey: Category , //! double check this . likely wrong
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
