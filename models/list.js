const Sequelize = require('sequelize');
const dbtest = require('../config/database');

const list = dbtest.define('users',{
    id : {
        type : Sequelize.STRING,
        autoIncrement: true,
        primaryKey: true
    },
    name : {
        type : Sequelize.STRING
    },
    age : {
        type : Sequelize.STRING
    },
    country : {
        type : Sequelize.STRING
    },
    city : {
        type : Sequelize.STRING
    },



},);

module.exports = list;