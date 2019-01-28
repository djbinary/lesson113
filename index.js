const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const keys = require('./config/keys');

// require('./services/passport'); IF yo load this file first, it will try to
// run const User = mongoose.model('users'); BEFORE the schema is deinfe
//in models/users --> const userSchema = new Schema ({ ...
// So we need to MAKE SURE we run the model/Users BEFORE passport
require('./models/User');
require('./services/passport');
 

mongoose.connect(keys.mongoURI);
const app = express();
app.use(bodyParser.json()); // will parse and assign to req.body property

app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey]
    })

);
app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);
require('./routes/billingRoutes')(app);
//require('./routes/surveyRoutes')(app);

if (process.env.NODE_ENV === 'production') {
  // Express will serve up production assets
  // like our main.js file, or main.css file!
  app.use(express.static('client/build'));

  // Express will serve up the index.html file
  // if it doesn't recognize the route
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);