const express = require('express');
const redis = require('redis');
const bodyParser = require('body-parser');
const app = express();
const client = redis.createClient('6379', 'redis');
const mongoose = require('mongoose');
const taskRoutes = require('./routes/taskRoute.js');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


mongoose.connect('mongodb://mongodb:27017', { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
    console.log('Connected to Server');
})
.catch((err) => console.log(err));

taskRoutes(app);

app.listen(3001);