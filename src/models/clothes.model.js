'use strict';


const Clothes = (sequelize,DataTypes) =>{
  return sequelize.define('Clothes',{
    clothesType: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    clothesBrand: {
      type: DataTypes.STRING,
      allowNull: false,
      // sync: {force: true},
    },
  });
};

module.exports = Clothes;