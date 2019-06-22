const path = require('path');
const express = require('express');
const config = require('./src/config.local');

const port = process.env.PORT || config.port;
const app = express();

app.use(express.static(`${__dirname}/public`));

app.get('*', (request, response) => {
  response.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

app.listen(port);

console.log(`server started on port ${config.port}`);
