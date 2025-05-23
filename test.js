const Sequelize = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

const sysUserModel = require('./models/sys_user');

const Model = sysUserModel(sequelize, Sequelize.DataTypes);

console.log(Model); // Should print model instance
console.log(Model.rawAttributes); // Should print fields object
