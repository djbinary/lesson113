//Express CANNOT take token posts
//We need https://www.npmjs.com/package/body-parser install in index.js
// this is an Express Middleware , which is wired up by using app.use


const keys = require('../config/keys');
// import the stripe wrapper library
const stripe = require('stripe')(keys.StripeSecretKey);
//https://stripe.com/docs/api/charges/create?lang=node
const requireLogin = require('../middlewares/requireLogin');
module.exports = app => {
    // we want to check api/stripe if user logged in
    // add requireLogin as second argument
    app.post('/api/stripe', requireLogin, async (req, res) =>{
       // check if use is signed in or not.
        // ALL the following comment replaced by ReguireLogin
        //if (!req.user) {
          //  return res.status(401).send({error: 'you must log in!'});
       // }
// post request handler 
       const charge = await stripe.charges.create({ //this is the caller that returns a promise
            amount: 500,
            currency: 'usd',
            description: '$5 for 5 credits',
            source: req.body.id

        });

//remember, req.user is assigned by passport. When the user 
//comes in passport looks at the cookie and see if user exists

        //add 5 unites to user model + save to db
        req.user.credits += 5;
      const user = await req.user.save();
      //respond to reques
      res.send(user);
    });
};