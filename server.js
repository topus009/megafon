/**
 * This server is to run your build locally
 */

const path = require('path');
const express = require('express');
// const bodyParser = require('body-parser')
const config = require('./config.local');

const port = process.env.PORT || config.port;
const app = express();
// app.use(bodyParser.json());

// serve static assets normally
app.use(express.static(`${__dirname}/public`));

// handle every other route with index.html, which will contain
// a script tag to your application's JavaScript file(s).
app.get('*', (request, response) => {
    response.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

app.listen(port);
console.log('server started on port ' + config.port);
