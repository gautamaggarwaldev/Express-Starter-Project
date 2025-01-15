const express = require('express');
const server = require('./config/serverConfig.js');
const connectDB = require('./config/dbConfig.js');
const bodyParser = require('body-parser')

const app = express();

app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({extended: true}));

app.post('/ping', (req, res) => {
    console.log(req.body);
    return res.json({message: "pong"})
});

app.listen(server.PORT, async() => {
    await connectDB();
    console.log(`Server is started at ${server.PORT}...`);
}); 

