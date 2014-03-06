#!/bin/env node

// Code from:
// https://github.com/openshift-quickstart/openshift-meteorjs-quickstart
// https://github.com/openshift-quickstart/openshift-meteorjs-quickstart/blob/f09a51bdb225f050358ea56d432defc46c16b023/meteorshim.js

var fs = require('fs')

// Setup env
process.env.ROOT_URL = "http://" + (process.env.OPENSHIFT_APP_DNS || "localhost");
process.env.MONGO_URL = (process.env.OPENSHIFT_MONGODB_DB_URL + process.env.OPENSHIFT_APP_NAME) || "mongodb://localhost:27017/meteor";
process.env.PORT = process.env.OPENSHIFT_NODEJS_PORT || 8000;
process.env.BIND_IP = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';

// Show connection details on startup
console.log("MONGO_URL IS: " + process.env.MONGO_URL);
console.log("ROOT_URL IS: " + process.env.ROOT_URL);
console.log("PORT: " + process.env.PORT);
console.log("BIND_IP: " + process.env.BIND_IP);

fs.stat('bundle/main.js', function(err, stat) {
// if the meteor application bundle is missing, 
// return additional installation instructions:
if(!err)
{
  // Start meteor server
  require('./bundle/main.js');
}else{
  var http = require('http');
  // Start a server that returns a short list of instructions
  var dev_instructions = "<body><h1>Almost there!</h1><p>To complete the installation, just follow <a href='https://github.com/skyveri/openshift-meteor-quickstart#meteor-on-openshift' target='_blank'>these instructions</a>.</p></body>";
  http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end(dev_instructions);
}).listen(process.env.PORT, process.env.BIND_IP);
  console.log('Server running at http://' + process.env.BIND_IP + ":" + process.env.PORT); 
}
});
