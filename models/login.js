'use strict';
var bcrypt = require('bcryptjs');

module.exports = (sequelize, DataTypes) => {
  const Sequelize = sequelize.Sequelize
  const Model = Sequelize.Model

  class login extends Model { }

  login.init({
    username: {
      type : DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'username tidak boleh kosong'
        },
        isAlphanumeric:{
          msg : 'harus alphanumeric'
        }
      }
    },
    password: {
      type : DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'password tidak boleh kosong'
        }
      }
    }
  }, { sequelize });

  login.beforeCreate((user, options) => {
    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(user.password, salt);
    user.password = hash
  })

  login.associate = function (models) {
    // associations can be defined here
  };
  return login;
};