
import { Request, Response } from 'express';

module.exports = (app) => {        
    const statusMonitor = require('express-status-monitor')({ path: '../' });                

    const unathorizedPage = (req: Request, res: Response) => {
      return res.status(200).json({
         status : 'Unathorized' 
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
   
    app.get('/status/', statusMonitor.pageRoute);    

  };
  