const express = require('express');
const redis = require('redis');
const bodyParser = require('body-parser');
const app = express();
const client = redis.createClient('6379', 'redis');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.status(200).send({ text: 'Connected!' });
});

app.listen(3001);

