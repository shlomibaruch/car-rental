const express = require('express');
const app = express();
const cars = require('./carsData');

const PORT = process.env.PORT = 5001;

app.get('/',(req,res) => {
    console.log('home');

});
app.get('/cars',(req,res) => {
    res.send(cars)
});

app.post('/cars/:search_car',(req,res) => {
    let a = req.params.search_car;
    console.log(a);
});
app.listen(PORT,()=> {
    console.log(`server listening on port ${PORT}`);
})