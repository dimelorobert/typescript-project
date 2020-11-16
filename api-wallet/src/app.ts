// Variables de entorno
process.env.NODE_ENV = process.env.NODE_ENV || 'development';
process.env.APP_ENV = process.env.APP_ENV || 'development';

import dotenv = require("dotenv");
dotenv.config({
    path: `${__dirname}/../config/${process.env.APP_ENV}.env`,
});
console.log('FROM APP_FOO:', process.env.APP_FOO);

// Importamos Express con su respectiva app
import express = require('express');
const app = express.application = express();
app.get('/', (request, response) => {
    response.send('The server is ---[ OFF ]---');
});

export {app};