require('dotenv').config({  
  path: process.env.NODE_ENV === "test" ? ".env.testing" : ".env"
});

import { Request, Response } from 'express';

module.exports = (app) => {        
    const statusMonitor = require('express-status-monitor')({ path: '../' });                
    const { authMiddleware } = app.libs.authMiddleware;
    
    const unathorizedPage = (req: Request, res: Response) => {
      return res.status(200).json({
        response: `Sorry, You don't have grant access the resource`,
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
    
    app.use('/status/', authMiddleware, statusMonitor.pageRoute);    

  };
  