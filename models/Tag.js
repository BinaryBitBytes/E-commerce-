const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Tag extends Model {}

Tag.init(
  {
    id: {
     type: DataTypes.INTEGER,  // declared tag id as an integer
     primaryKey: true, //tag id is primary key
     autoIncrement: true // auto incrementation on tag id
   },
   tag_name: {
     type: DataTypes.STRING // tdeclared tag name as a string
   },
 },
  {
    sequelize, // using sequelize
    timestamps: false,
    freezeTableName: true, // freezing table names
    underscored: true,
    modelName: 'tag', // model name as tag
  }
);

module.exports = Tag;
