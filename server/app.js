//We're importing db
require('./db/config');
const express = require('express'),
  path = require('path'),
  openRoutes = require('./routes/open'),
  cookieParser = require('cookie-parser');
passport = require('./middleware/authentication');

const app = express();

//Middleware (parse incoming JSON into objects)
app.use(express.json());

// Unauthenticated routes
app.use('/api/users', openRoutes);

app.use(cookieParser());

// Serve any static files
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

// Any authentication middleware and related routing would be here.

// Handle React routing, return all requests to React app
if (process.env.NODE_ENV === 'production') {
  app.get('*', (request, response) => {
    response.sendFile(path.join(__dirname, '../client/build', 'index.html'));
  });
}
module.exports = app;
