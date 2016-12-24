'use strict';
module.exports = function(sequelize, DataTypes) {
  var HighScore = sequelize.define('HighScore', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    score: DataTypes.TEXT
  });
  return HighScore;
};