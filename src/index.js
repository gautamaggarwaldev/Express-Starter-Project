const express = require('express');
const server = require('./config/serverConfig.js')

const app = express();

// const PORT = process.env.PORT;


app.listen(server.PORT, () => {
    console.log(`Server is started at ${server.PORT}...`);
}); 