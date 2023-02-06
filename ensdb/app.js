let express = require('express')
let app = express()

let bodyParser = require('body-parser');
app.use(bodyParser.json())

const handlers = require('./handlers/').handlers


async function processBatch(batch) {
  return new Promise(function(resolve, reject) {
    for (var i = 0; i < Object.keys(handlers).length; i++) {
      var categoryFilter= batch.filter(row=> row.eventCategoryType.toLowerCase()===Object.keys(handlers)[i].toLowerCase());
      handlers[Object.keys(handlers)[i]](categoryFilter);
    }
    resolve(true)
  })

}



app.post('/ens', function(req, res) {

  if(req.body.verificationKey) {
    //handle auto verification
    console.log('Verification Code: ' + req.body.verificationKey)
    res.sendStatus(200)
  } else {
    processBatch(req.body)
      .then(result=> res.sendStatus(200))
      .catch(function (result) { console.log(result); res.sendStatus(500)})
  }

});



module.exports = app
