const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require("cors");;

const app = express();


mongoose.connect('mongodb+srv://deds:d@cluster0-wazua.gcp.mongodb.net/week10?retryWrites=true&w=majority',{
  useNewUrlParser: true,
  useFindAndModify: true,
  useUnifiedTopology: true,
  useCreateIndex: true    
});

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);

