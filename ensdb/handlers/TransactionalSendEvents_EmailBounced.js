const models = require('../models/').sequelize.models

function flattenInfo(arr) {
  return arr.map(function(row) {
    var info = row.info;
    delete row.info;
    Object.keys(info).forEach((item, i) => {
      row[item] = info[item];
    });
    return row
  })

}


module.exports = function(batch) {
  models.TransactionalSendEvents_EmailBounced.bulkCreate(flattenInfo(batch), {ignoreDuplicates: true})
}
