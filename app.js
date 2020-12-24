const express = require('express');
const mongoose = require("mongoose");
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors')
const config = require('./config')

var mongoUser = config.mongoAdmin;
mongoose.connect("mongodb+srv://" + mongoUser.user + ":" + mongoUser.password
         +"@cluster0.s3hik.mongodb.net/www2_karina?retryWrites=true&w=majority", {   
            useNewUrlParser: true,
            useUnifiedTopology: true 
        });

var indexRouter = require('./routes/index');
var orderRouter = require('./routes/order');
var pizzaRouter = require('./routes/pizza')
var additionalsRouter = require('./routes/additionals')

var app = express();

var allowedOrigins = ['http://localhost:3000',
                      'http://localhost:3001',
                      'https://3000-ae2d4aef-74fc-4191-913c-3ae577676c45.ws-eu03.gitpod.io'];

app.use(cors({
    origin: function(origin, callback){
      if(!origin) return callback(null, true);
      if(allowedOrigins.indexOf(origin) === -1){
        var msg = 'The CORS policy for this site does not ' +
                  'allow access from the specified Origin.';
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    }
  }));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/', indexRouter);
app.use('/api/order', orderRouter);
app.use('/api/pizza/', pizzaRouter);
app.use('/api/additionals/', additionalsRouter);

app.get('*', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

module.exports = app;
