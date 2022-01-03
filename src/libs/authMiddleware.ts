import passport from 'passport';
const tokenUtils = require('../utils/tokenUtils');

function authMiddleware(req, res, next) {
    const token = req.headers['x-access-token'];                

    try{       
      tokenUtils.decodeJWT(token);
      return next()
    }catch(err) {
      return res.status(401).json({        
        response: 'Must be authenticated to access this router',
        auth: { 
          isAuthenticated: req.isAuthenticated(),
          url: `${process.env.BASE_URL}/auth`
        }
      });;
    }            
  }

  passport.serializeUser(function(user, done) {  
    const looged_user = tokenUtils.decodeJWT(user);  
    done(null, looged_user.id);
  });
  
  passport.deserializeUser(function(user, done) {    
    const looged_user = tokenUtils.decodeJWT(user);  
    done(null, looged_user);  
  });


module.exports = {
  authMiddleware
};