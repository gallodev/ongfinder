import passport from 'passport';

const bodyParser = require('body-parser');
const cors = require('cors');
const compression = require('compression');
const helmet = require('helmet');
const statusMonitor = require('express-status-monitor')({ path: '' });
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

var opts: any = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.SECRET;

passport.use(new JwtStrategy(opts, (jwt_payload, done) => {    
    return done(null, false);    
}));

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