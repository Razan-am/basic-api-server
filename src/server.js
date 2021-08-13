'use strict';

const express = require('express');

const notFoundHandler = require('./error-handlers/404');
const errorHandler = require('./error-handlers/500');
const logger = require('./middleware/logger');
const foodRouter = require('./routes/food');
const clothesRouter = require('./routes/clothes');

const app = express();

app.use(express.json());
app.use(logger);
app.use(foodRouter);
app.use(clothesRouter);

function start(port){
  app.listen(port,()=>{
    console.log(`Running on port ${port}`);
  });
}

app.use('*',notFoundHandler);
app.use(errorHandler);

module.exports={
  app:app,
  start:start,
};