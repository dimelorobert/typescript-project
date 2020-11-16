import express = require('express');

const app = express.application = express();
app.get('/', (request, response) => {
    response.send('The server is ---[ OFF ]---');
});

export {app};