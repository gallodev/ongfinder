const bodyParser = require('body-parser');
const cors = require('cors');
const compression = require('compression');
const helmet = require('helmet');
const statusMonitor = require('express-status-monitor')({ path: '' });
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const DB = require('../database/connection')();


passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

passport.use(new LocalStrategy(
  async (username, password, done) => {                
    let fields_ong = ['ong_name','ong_mail','cod_phone','phone','category_id','number','address','zipcode','city'];
    const hasOng = await DB.select(fields_ong).from('ongs').where({ong_mail :username , password: password}).limit(1);    

    if(hasOng.length > 0) {
      return done(null, {...hasOng, user_type: 'ong'});
    }
    
    const fields_user = ['mail','name','cod_phone','phone','number','address','zipcode','city'];
    const hasUser = await DB.select(fields_user).from('users').where({mail: username, password: password}).limit(1);    

    if(hasUser.length > 0) {
      return done(null, {...hasUser, user_type: 'user'});
    }
    
    return done(null, false);    
  } 
));


module.exports = (app) => {  
  app.set('json spaces', 4);
  app.use(helmet());
  app.use(cors({
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['*'],
  }));
  app.use(compression());
  app.use(statusMonitor.middleware);  
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(passport.initialize());
};