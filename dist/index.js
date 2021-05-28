"use strict";
const express = require('express');
const controller = require('./controller');
const app = express();
const port = 8000;
app.get('/', (req, res) => {
    res.send(controller.handleRequest());
});
app.listen(port, () => {
    console.log(`App running on http://localhost:${port}`);
});
