const sequelize = require('../models/').sequelize

sequelize.sync({force: true});
