const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {// define columns
    id:{
      type: DataTypes.INTEGER, // declared id datatype as an interger
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    product_id: {
      type: DataTypes.INTEGER,// declared id datatype as an interger
      references: {
        model: 'product',
        key: 'id',
      },
    },
    tag_id: {
      type: DataTypes.INTEGER,// declared id datatype as an interger 
      references: {
        model: 'tag',
        key: 'id',
      },
    }
  },
  {
    sequelize, //using sequelize
    timestamps: false, //no time stamps
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag', // model name
  }
);

module.exports = ProductTag;
