// Import Dependencies
require('dotenv').config();// allows to get access to the .env properties
require('./config/database');// config the connection to connect to mongodb
const express = require('express');
const path = require('path') 
const { setGlobalMiddlewares } = require('./utils/middleware'); // Import the middleware



// Import Routes
const indexRouter = require('./routes/index');
const flightsRouter = require('./routes/flights');

// Express into variable (app)
const app = express();

//middleware
setGlobalMiddlewares(app);


// view engine
app.set('views', path.join(__dirname, 'views')); // adds an slash at the end on the views
app.set('view engine', 'ejs');


// Register Routes
app.use('/', indexRouter)
app.use('/flights', flightsRouter)




// app listener
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});