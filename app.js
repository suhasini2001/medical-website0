 const express = require('express');
 const app = express();
 const bodyParser = require('body-parser');
 const mongoose = require('mongoose');
const { model } = require('./models/User');
const { Router } = require('express');

const User = require('./models/User');


 //DB configaturation
 const db = require('./configuration/keys').MongoURI;

//connect to mongo
 mongoose.connect(db, {
     useNewUrlParser: true,
     useUnifiedTopology: true,
     useFindAndModify: true,
     useCreateIndex: true});

 const connection = mongoose.connection;
 console.log('MongoDB connected');
 


 app.set('view engine', 'ejs');
 app.use(bodyParser.urlencoded({extended: true}));


 app.get('/dailyUpdates', function(req, res){
     res.render('dailyUpdates',{
     })
 })

 //appointments
app.get('/appointments', function(req, res){ 
    res.render('appointments');
})

app.get('/specalisation', function(req, res){
    res.render('specalisation')
})

app.get('/Covid19', function(req, res){
    res.render('covid19')
})

app.get('/Events', function(req, res){
    res.render('events')
})

app.get('/Information', function(req, res){
    res.render('information')
})

app.get('/contactUs', function(req, res){
    res.render('contactUs')
})

app.get('/about', function(req, res){
    res.render('About')
})

app.get('/career', function(req, res){
    res.render('Career')
})

app.get('/donate', function(req, res){
    res.render('donate')
})

app.get('/services', function(req, res){
    res.render('services')
})

app.get('/booked', function(req, res){
    res.render('booked')
})


 //intial route
app.get('/', function(req, res, next){
    res.render('index');
})

//body parser
app.post('/appointments', function(req, res) {
    console.log(req.body)
    const{ firstname, lastname, email, phonenumber, age, specialisation } = req.body;
    let userdetails = {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        phonenumber: req.body.phonenumber,
        age: req.body.age,
        specialisation: req.body.specialisation,
    };
    User.create(userdetails, function
        (err, data) { 
          res.redirect('/booked');
        })
});

 app.listen('3000', function() {
     console.log('Express server is running on port 3000');
 })

 module.exports = Router;