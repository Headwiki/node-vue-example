const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const mongoose = require('mongoose');
const Task = require("../api/models/task");

mongoose.connect('mongodb://localhost:27017/tasks');
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", function(callback){
  console.log("Connection Succeeded");
});

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())


const routes = require('../api/routes/tasksRoutes'); //importing route
routes(app); //register the route

app.listen(process.env.PORT || 8081)
