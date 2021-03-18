// .ENV //
require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const morgan = require('morgan');
const fs = require('fs');
const path = require('path');

const routerUsers = require('./routes/users');
const routerUsersGroup = require('./routes/usersGroup');
const config = require('./config/connect');

// CROS-ORIGIN CLIENT //
const cors = require('cors');
var corsOptions = {
    origin: "http://localhost:3001"
};
app.use(cors(corsOptions));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var accessLogStream = fs.createWriteStream(path.join(__dirname, '/logs/access.log'), { flags: 'a'})
app.use(morgan('dev'));
app.use(morgan('combined', { stream: accessLogStream }));

// Router DBO USER //
app.use(routerUsers);

// Router DBO USER_GROUP //
app.use(routerUsersGroup);

// simple JSON API //
app.get('/', function(req, res) {
    res.json({ note: " welcome"});
});


// *** SERVER LOG ***//
app.listen(process.env.PORT, (err) => {
    if(err)
    console.log('Unable to start server');
    else
    console.log(`Server on PORT ${process.env.PORT}`);
})