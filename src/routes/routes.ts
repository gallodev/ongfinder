
import { Request, Response } from 'express';

module.exports = (app) => {        
    const statusMonitor = require('express-status-monitor')({ path: '../' });                

    const unathorizedPage = (req: Request, res: Response) => {
      return res.status(200).json({
        response: `Sorry, You don't have grant access the resource`,
      })
    }

    function authenticationMiddleware(req, res, next) {
      if (req.isAuthenticated()) return next();  
      return res.status(401).json({        
        response: 'Must be authenticated to access this router',
        auth: { 
          isAuthenticated: req.isAuthenticated(),
          url: `${process.env.BASE_URL}/auth`
        }
     })          
    }
                     
    app.get('/unathorized', unathorizedPage);       

    /**
     * @swagger
     * /status:
     *  get: 
     *    tags: ['status']
     *    description: Get status dashboard
     *    responses:     
     *      '200': 
     *        description: Return dashboard kpi's of consume
    */
   
    app.use('/status/',authenticationMiddleware, statusMonitor.pageRoute);    

  };
  