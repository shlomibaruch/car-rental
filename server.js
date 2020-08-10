const express = require('express');
const app = express();

const PORT = process.env.PORT = 5001;

app.get('/',(req,res) => {
    console.log('home');

});
app.get('/cars',(req,res) => {
    console.log('cars');
});

app.post('/cars/:search_car',(req,res) => {
    let a = req.params.search_car;
    console.log(a);
});
app.listen(PORT,()=> {
    console.log(`server listening on port ${PORT}`);
})