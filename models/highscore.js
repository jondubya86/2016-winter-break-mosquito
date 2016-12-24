'use strict';
module.exports = function(sequelize, DataTypes) {
  var HighScore = sequelize.define('HighScore', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    score: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return HighScore;
};