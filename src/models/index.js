'use strict';

const POSTGRES_URI = 'postgres://localhost:5432/food';
const { Sequelize , DataTypes } = require('sequelize');
const food = require('./food.model');

let sequelize = new Sequelize (POSTGRES_URI,{});

module.exports={
  Food : food(sequelize,DataTypes),
  db:sequelize,
};