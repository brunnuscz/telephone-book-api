const config = require('../config/db');
const Sequelize = require('sequelize');
const Telephone = require('../models/telephone');
const connection = new Sequelize(config);

Telephone.init(connection);

module.exports = connection;