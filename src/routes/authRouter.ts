import { Request, Response } from 'express';
import passport from 'passport';

module.exports = (app) => {
    /**
     * @swagger
     * /auth:
     *  get: 
     *    tags: ['auth']
     *    description: Get authentication token for use in api requests
     *    responses: 
     *      '200': 
     *        description: Return data
    */

      app.post('/auth', passport.authenticate('local', {
        successRedirect: '/doc',
        failureRedirect: '/unathorized',
        session: false
      }));
};