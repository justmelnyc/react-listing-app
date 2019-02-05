const express = require('express');
const server = express();
var path = require('path');

server.use(express.static(path.resolve('.') + '/build'));

server.get('/health', (req, res) => {
  res.status(200);
  res.send('ok');
});

server.get('/*', (req, res) => {
  res.sendFile(path.resolve('.') + '/build/index.html');
});

const port = process.env.PORT;
server.listen(port, function() {
  console.log('prod server listening on port ' + port);
});
