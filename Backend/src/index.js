const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();
app.use(express.json());
app.use(routes);

mongoose.connect('mongodb+srv://deds:d@cluster0-wazua.gcp.mongodb.net/week10?retryWrites=true&w=majority',{
    useNewUrlParser: true,
  useFindAndModify: true,
  useUnifiedTopology: true,
  useCreateIndex: true    
});



app.listen(3333);

