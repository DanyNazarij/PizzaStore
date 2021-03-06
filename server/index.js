const express = require('express')
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require("body-parser");

const homeRouter = require('./routes/homeRouter');
const productApi = require('./routes/productApi');
const userApi = require('./routes/userApi');
const orderApi = require('./routes/orderApi');
const cartApi = require('./routes/cartRouter')

const app = express();
const PORT = 9000;






// настройка CORS
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, PATCH, PUT, POST, DELETE, OPTIONS");
    next();
});
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(express.urlencoded({extended:true}));

app.use(bodyParser.json())


app.use('/', homeRouter);

app.use('/productApi', productApi);
app.use('/userApi', userApi);
app.use('/orderApi', orderApi);
app.use('/cartApi', cartApi);


app.use(function (req, res) {
    res.status(404).send('page not found')
});


start();

async function start(){
    try{
<<<<<<< HEAD
        await mongoose.connect(`mmongodb://localhost:27017/pizzaStore`, {
=======
        await mongoose.connect(`mongodb://localhost:27017/pizzaStore`, {
>>>>>>> 0eb9ce3... NazarCommit
            useNewUrlParser: true,
            useUnifiedTopology: true
        }, function(err){
            if(err) return console.log(err);

            app.listen(PORT, ()=>{
                console.log(`server has been started on port ${PORT}`)
            })
        });
    }catch (e) {
        console.log(e)
    }
}
