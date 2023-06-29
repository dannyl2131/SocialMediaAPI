// create server configuration
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const db = require('./config/connection')

const PORT = 3002;

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(routes);

db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`API server for Social Media API running on port ${PORT}`)
    })
})

// app.get('/', (req, res) => {
//     res.json({message: "you hit the get route"})
// })