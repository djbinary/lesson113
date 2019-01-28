
const passport = require('passport');

module.exports = app => {
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  );

  app.get(
    '/auth/google/callback',
    passport.authenticate('google'),
    (req, res) => {
      res.redirect('/surveys');
    }
  );

  app.get('/api/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  });

  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });
};
/* Original code 
const passport = require('passport');
module.exports = app => {
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  );
  // Register user
  app.get('/auth/google/callback',
   passport.authenticate('google'),
   (req, res) => {
     res.redirect('/surveys');
   }
   )
  app.get('/api/logout', (req, res) =>{
    req.logout();
    ///res.send(req.user);
    res.redirect('/ ');
  });
  //route:
  app.get('/api/current_user',(req, res) => {
    //model:
res.send(req.user);
  });


};
End of original code */