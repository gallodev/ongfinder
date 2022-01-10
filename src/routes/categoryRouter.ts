import { Request, Response } from 'express';
import { queryParams } from '../types';

module.exports = (app): void => {
    const { OngController } = app.controllers;
    const { authMiddleware } = app.libs.authMiddleware;
    const { config } = app.config;


    const listById = async (req: Request<{id: number}>, res: Response) => {                   
        const { id } = req.params;      
  
        const params: queryParams = {
          id,        
        };
        
        try {             
          const ongs = await OngController.getOngCategoryById(params);        
          return res.status(config.STATUS.OK).json(ongs);
        } catch (error) {               
          console.log(error);
          return res.status(config.STATUS.INTERNAL).json({ message: config.INTERAL_ERROR_MSG });
        }
    };     

    const list = async (req: Request<{},{},{},queryParams>, res: Response) => {                   
        const { offset, limit } = req.query;

        const params: queryParams = {            
            offset,
            limit
        }
        
        try {         
          const category = await OngController.getOngCategorys(params);        
          return res.status(config.STATUS.OK).json(category);
        } catch (error) { 
          console.log(error);
          return res.status(config.STATUS.INTERNAL).json({ message: config.INTERAL_ERROR_MSG });
        }
    };   
    
    const create = async (req: Request, res: Response) => {        
        const { category } = req.body;                        
        try {
            const category_id = await OngController.createCategory(category);      
            return res.status(config.STATUS.OK).json(category_id);      
        } catch (error) {
            console.log(error);
            return res.status(config.STATUS.INTERNAL).json({ message: config.INTERAL_ERROR_MSG });
        }
    }
    
    /**
     * @swagger
     * /api/category/:
     *  post: 
     *    tags: ['category']
     *    description: Add a new ong category
     *    parameters:
     *        - name: x-access-token
     *          description: Type a valid JWT
     *          paramType: header
     *          required: true
     *          dataType: string    
     *        - name: category
     *          description: Type a category name
     *          paramType: path
     *          required: false
     *          dataType: string         
     *    responses: 
     *      '201': 
     *        description: Return category id
     *      '500':
     *        description: Something went wrong with backend
     * 
     *  /api/category/:id:
     *  get: 
     *    tags: ['category']
     *    description: Get category list or specific filter by id
     *    parameters:
     *        - name: x-access-token
     *          description: Type a valid JWT
     *          paramType: header
     *          required: true
     *          dataType: string    
     *        - name: id
     *          description: Type a valid category id
     *          paramType: path
     *          required: false
     *          dataType: number
     *        - name: Type a limit
     *          description: Type a limit to ong result
     *          paramType: query
     *          required: false
     *          dataType: number
     *        - name: Type a offset
     *          description: Type a initial position to get ong result
     *          paramType: query
     *          required: false
     *          dataType: number
     *    responses: 
     *      '200': 
     *        description: Return ong detail
     *      '500':
     *        description: Something went wrong with backend
    */

    app.post('/api/category/',authMiddleware,create);       
    app.get('/api/category/',authMiddleware,list);
    app.get('/api/category/:id',authMiddleware,listById);         

};