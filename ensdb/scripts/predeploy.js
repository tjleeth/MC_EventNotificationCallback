const db = require('../models')




console.log('Starting sync.')

async function build() {


  db.sequelize.sync().then(function(){
    console.log('Database is in sync.')
    return true
  }).catch(function(e) {
    console.warn('Warning: Database is not in sync. \n\n'+ e)
    return false
  })

}
module.exports = build;
