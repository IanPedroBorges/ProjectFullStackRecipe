const express = require('express');

const cors = require('cors');

const routers = require('./routes');

const corsConfig = {
    origin: '*',
    optionsSuccessStatus: 200
};

const app = express();

app.use(cors(corsConfig));
app.use(express.json());


app.use(routers);

module.exports = app;