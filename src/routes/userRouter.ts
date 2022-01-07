import { Request, Response } from 'express';
import { queryParams, User } from '../types';

module.exports = (app): void => {
    const { UserController } = app.controllers;
    const { authMiddleware } = app.libs.authMiddleware;
    const { config } = app.config;

    /*         
    const list = async (req: Request<User,{},{},queryParams>, res: Response) => {                   
        const { id } = req.params;                
        const { offset, limit } = req.query;

        const params: queryParams = {
            id: id,
            offset: offset,
            limit: limit,
        }
        
        try {         
          const category = await UserController.list(params);        
          return res.status(config).json(category);
        } catch (error) {                
          return res.status(500).json({ message: config.INTERAL_ERROR_MSG });
        }
    };   
    */
    
    const create = async (req: Request<{},{},User,queryParams>, res: Response) => {               
        const user = req.body;                                
        
        try {
            const category_id = await UserController.createUser(user);      
            return res.status(config.STATUS.CREATED).json(category_id);      
        } catch (error) {
            console.log(error);
            return res.status(config.STATUS.INTERNAL).json({ message: config.INTERAL_ERROR_MSG });
        }
    }
    
    /**
     * @swagger  
     *  /api/user:
     *  post: 
     *    tags: ['user']
     *    description: Get category list or specific filter by id
     *    parameters:
     *        - name: x-access-token
     *          description: Type a valid JWT
     *          paramType: header
     *          required: true
     *          dataType: string         
     *    responses: 
     *      '201': 
     *        description: Return created user id
     *      '500':
     *        description: Something went wrong with backend
    */

    app.post('/api/user/',authMiddleware,create); 

};