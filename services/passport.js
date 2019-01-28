const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

// Instead of using Reguire User.js, we use the following,
// beceause users was already loaded on mongoose.model in the User.js
//Loading mongoose.model('users', userSchema);

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done ) => {
 User.findById(id).then(user => {
   done(null, user);
 });
});
passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback',
      proxy: true

    },
   
   async (accessToken, refreshToken, profile, done) => {
      
     const existingUser = await User.findOne({googleId: profile.id})
     
        if (existingUser){
              return done(null, existingUser);
        } 
        
        const user = await new User({googleId: profile.id}).save() 
        done(null, user);
      }
 )
);



   
   /* (accessToken, refreshToken, profile, done) => {
      //the 'done' argument tell Passport that we are DONE with the authentication flow, 
 
      User.findOne({googleId: profile.id})
      //Check logic, if found ONE that match criterial (TREU) execute .then promise
              .then((existingUser) => {
            if (existingUser){
                   // Use the Done function, first argument gives any Error messages,
                   // second argument returns the user

              done(null, existingUser);
              console.log('user exists');
            } else {
              new User({googleId: profile.id}) //create new mongoose model instance. Single record inside our collection
              .save() //save model instance
              // Add argument to the function then, user (which just created)
              //User as an argument to the function we passed to .then And then as a second argument we will pass and the user who has just saved.
              // HOW did user get assigned a value?!!
              .then(user => done(null, user)); // but by convention we always make use of the one that's provided to us inside of the promised callback
              //because this one might have some additional changes to that was made to it... 'user' is from promise call back?.
              console.log('value of user is', user);
          }
        });
      }
 )
);
*/