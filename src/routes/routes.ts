require('dotenv').config({  
  path: process.env.NODE_ENV === "test" ? ".env.testing" : ".env"
});

import { Request, Response } from 'express';
import  jwt from 'jsonwebtoken';

const DB = require('../database/connection')();

module.exports = (app) => {        
    const statusMonitor = require('express-status-monitor')({ path: '../' });                
    const { authMiddleware } = app.libs.authMiddleware;
    
    const unathorizedPage = (req: Request, res: Response) => {
      return res.status(200).json({
        response: `Sorry, You don't have grant access the resource`,
      })
    }        

    app.post("/token", async (req: Request, res: Response) => {            
      if (req.body.email && req.body.password) {        
        const email = req.body.email;
        const password = req.body.password;
                
        let fields_ong = ['id','ong_name','ong_mail','cod_phone','phone','category_id','number','address','zipcode','city'];
        const hasOng = await DB.select(fields_ong).from('ongs').where({ong_mail: email , password: password}).first();                

        if(hasOng) {                               
          const payload = {id: hasOng.id};          
          const token = jwt.sign(payload, process.env.SECRET);          
          return res.json({token: token});
        }
    
        const fields_user = ['id','mail','name','cod_phone','phone','number','address','zipcode','city'];
        const hasUser = await DB.select(fields_user).from('users').where({mail: email, password: password}).first();       
        

        if(hasUser) {
          const payload = {id: hasUser.id};
          const token = jwt.sign(payload, process.env.SECRET);
          return res.json({token: token});
        }  
        
        if(!hasUser && !hasOng) {
          return res.sendStatus(401);  
        }

      } else {      
        return res.sendStatus(401);      
      }      
    });
                     
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
  