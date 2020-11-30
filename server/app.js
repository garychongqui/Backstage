require('./db/config');
const express = require('express'),
  path = require('path'),
  openRoutes = require('./routes/open/index'),
  artistRoutes = require('./routes/open/artist'),
  userRouter = require('./routes/secure/users'),
  cookieParser = require('cookie-parser'),
  equipmentRouter = require('./routes/secure/equipment'),
  packageRouter = require('./routes/secure/package'),
  eventRouter = require('./routes/secure/events'),
  fileUpload = require('express-fileupload'),
  passport = require('./middleware/authentication');

const app = express();

app.use(express.json());

app.use(
  express.urlencoded({
    extended: true
  })
);

app.use('/api/users', openRoutes);
app.use('/artist', artistRoutes);

app.use(cookieParser());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: '/tmp/images'
  })
);

app.use('/api/*', passport.authenticate('jwt', { session: false }));

app.use('/api/users', userRouter);
app.use('/api/packages', packageRouter);
app.use('/api/equipment', equipmentRouter);
app.use('/api/events', eventRouter);

if (process.env.NODE_ENV === 'production') {
  app.get('*', (request, response) => {
    response.sendFile(path.join(__dirname, '../client/build', 'index.html'));
  });
}
module.exports = app;
