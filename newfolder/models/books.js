'use strict';
module.exports = (sequelize, DataTypes) => {
  const Books = sequelize.define('Books', {
    name: DataTypes.STRING
  }, {});
  Books.associate = function(models) {
    // associations can be defined here
  };
  return Books;
};