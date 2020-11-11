const express = require('express');
const app = express();
app.use(express.static('public'));
const cars = require('./carsData');
const mongoose = require('mongoose')
const PORT = process.env.PORT = 5001;
// const passport = require('passport');

// const cors = require('cors')
app.use(express.json());
// app.use(cors());
require("dotenv").config();
app.get('/', (req, res) => {
    console.log('home');

});
app.get('/cars', (req, res) => {
    res.send(cars)
});

app.post('/cars/:search_car', (req, res) => {
    let a = req.params.search_car;

});


app.listen(PORT, () => {
    console.log(`server listening on port ${PORT}`);
});
const path = require('path');
if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'car_rental_client/build')));
// Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'car_rental_client/build', 'index.html'));
  });
}
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
app.use('/oauth', require('./routes/facebookAuth'));