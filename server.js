const throng = require('throng')
var predeploy = require('./scripts/predeploy.js');

var success = predeploy();


function thread(workerid) {

  var models = require('./models/').sequelize.models;
  var app = require('./app.js');

  var now = new Date()

  app.listen(process.env.PORT, () => models.ens_log.create({logMessage: `[WORKER${workerid}] Accepting requests.`, logDate: now.toISOString()}))

  process.on('SIGTERM', () => {
    var now = new Date()
    models.ens_log.create({logMessage: `[WORKER${workerid}] Exiting.`, logDate: now.toISOString()})
    process.exit();
  });


}
thread(1);


/*throng({
  workers: process.env.WEB_CONCURRENCY || 4,
  start: thread,
  lifetime: Infinity
});*/
