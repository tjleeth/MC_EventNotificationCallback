const fs        = require('fs');
var handlers = fs.readdirSync('./handlers/').filter(filename=> filename.toLowerCase()!=='index.js' && filename.indexOf('.js')>=0)

let out = {};

for (var i = 0; i < handlers.length; i++) {
  var name = handlers[i].replace('.js','').replace('_','.');
  out[name] = require('./'+handlers[i]);
}

module.exports.handlers = out;
