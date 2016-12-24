'use strict';
module.exports = function(sequelize, DataTypes) {
  var HighScore = sequelize.define('HighScore', {
    name: DataTypes.STRING,
    score: DataTypes.INTEGER
  });
  return HighScore;
};