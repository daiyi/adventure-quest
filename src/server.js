'use strict';
var path = require('path');

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'resources', 'welcomePage.html'))
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
