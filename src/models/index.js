'use strict';

const POSTGRES_URI = process.env.NODEENV == 'test' ? 'sqlite:memory' : 'postgres://localhost:5432/food';
const { Sequelize , DataTypes } = require('sequelize');
const food = require('./food.model');
const clothes = require('./clothes.model');

let sequelize = new Sequelize (POSTGRES_URI,{});

module.exports={
  Food : food(sequelize,DataTypes),
  Clothes:clothes(sequelize,DataTypes),
  db:sequelize,
};