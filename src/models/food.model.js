'use strict';


const Food = (sequelize,DataTypes) =>{
  return sequelize.define('Food',{
    foodType: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    foodName: {
      type: DataTypes.STRING,
      // sync: {force: true},
    },
  });
};

module.exports = Food;