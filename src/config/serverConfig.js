const dotenv = require('dotenv');
dotenv.config();

// here we are exporting all the env variables
module.exports = {
    PORT: process.env.PORT,
    DB_URL: process.env.DB_URL
}