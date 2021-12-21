import { Request, Response } from 'express';

module.exports = (app) => {    
    
    /**
     * @swagger
     * /health:
     *  get: 
     *    tags: ['health']
     *    description: Service Health check
     *    responses: 
     *      '200': 
     *        description: Return API status
    */
   
   app.get('/health',(req: Request,res: Response) => {           
        return res.status(200).json({
            status: "running"
        });
   });

};