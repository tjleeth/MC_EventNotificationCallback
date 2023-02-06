
const fs        = require('fs');
const path      = require('path');
const Sequelize = require('sequelize');
const db        = {};

const sequelize = new Sequelize(process.env.DATABASE_URL, {dialect: process.env.DB_DIALECT});

var models = fs.readdirSync('./models').filter(filename=> filename.toLowerCase()!=='index.js' && filename.indexOf('.js'>0))

models.forEach(function(model) {
  module.exports[model] = sequelize.import(__dirname + '/' + model);
});


module.exports.sequelize = sequelize;
