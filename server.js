const express = require('express');
const app = express();
const cars = require('./carsData');
const mongoose = require('mongoose')
const PORT = process.env.PORT = 5001;
const cors = require('cors')
app.use(express.json());
app.use(cors());
require("dotenv").config();
app.get('/', (req, res) => {
    console.log('home');

});
app.get('/cars', (req, res) => {
    res.send(cars)
});

app.post('/cars/:search_car', (req, res) => {
    let a = req.params.search_car;
    console.log(a);
});

app.listen(PORT, () => {
    console.log(`server listening on port ${PORT}`);
});

mongoose.connect(process.env.MONGODB_CONNECTION_STRING,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    },
    (err) => {
        if (err) throw err;
        console.log('MongoDB connection esrablished');
    });
app.use('/users', require('./routes/UserRoute'));