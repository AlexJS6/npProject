//Database: mongodb+srv://AlexPY6:<password>@cluster0.f9xlu.mongodb.net/<dbname>?retryWrites=true&w=majority
//PWD: UdAIYwO9z4cHsiuc
//User: AlexPY6 


const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose'); // Set up your database

const pageRoutes = require('./routes/pages');
const userRoutes = require('./routes/user');

const app = express();

app.set('view engine', 'ejs');
//app.set('views', __dirname, ' /views');
app.use(express.static('./public'));

mongoose.connect('mongodb+srv://AlexPY6:UdAIYwO9z4cHsiuc@cluster0.f9xlu.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true})
    .then(() => {
        console.log('Successfully connected to mongoDB Atlas!');
    })
    .catch((error) => {
        console.log('Unable to connect to MongoDB Atlas!');
        console.log(error);
    })


app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use(express.urlencoded({ extended: false }));


app.use('/user', userRoutes);
app.use('/', pageRoutes);


module.exports = app;