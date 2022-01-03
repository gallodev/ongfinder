import { Request, Response } from 'express';
import  jwt from 'jsonwebtoken';

const DB = require('../database/connection')();

module.exports = (app) => {
  
    /**
     * @swagger
     * /token:
     *  post: 
     *    tags: ['token']
     *    description: Get JWT for use in private api requests
     *    parameters:
     *        - name: email
     *          description: Type your (Username | Ong) email
     *          paramType: body
     *          required: true
     *          dataType: string
     *        - name: password
     *          description: Type your password
     *          paramType: body
     *          required: true
     *          dataType: string
     *    responses: 
     *      '200': 
     *        description: Return valid JWT to x-access-token
     *      '401': 
     *        description: Return Unauthorized
    */

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
    
    
};