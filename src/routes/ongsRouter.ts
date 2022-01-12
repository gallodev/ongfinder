import { Request, Response } from 'express';
import { Ong, queryParams } from '../types/';

module.exports = (app): void => {
    const { config } = app.config;
    const { OngController } = app.controllers;
    const { authMiddleware } = app.libs.authMiddleware;

    const listById = async (req: Request<{id: number}>, res: Response) => {                   
      const { id } = req.params;      

      const params: queryParams = {
        id,        
      };
      
      try {             
        const ongs = await OngController.getOngsById(params);        
        return res.status(config.STATUS.OK).json(ongs);
      } catch (error) {                       
        return res.status(config.STATUS.INTERNAL).json({ message: config.INTERAL_ERROR_MSG });
      }
  };     

    const list = async (req: Request<{},{},{},queryParams>, res: Response) => {            
        const { offset, limit } = req.query;        
        const params: queryParams = {
          offset,
          limit
        };

        try {               
          const ongs = await OngController.getOngs(params);        
          return res.status(config.STATUS.OK).json(ongs);
        } catch (error) {                           
          return res.status(config.STATUS.INTERNAL).json({ message: config.INTERAL_ERROR_MSG });
        }
    };        

    const create = async (req: Request<{},{},Ong>, res: Response) => {        
      const OngData: Ong = req.body;    
      
      try {
          const ong_id = await OngController.createOng(OngData);      
          return res.status(config.STATUS.CREATED).json(ong_id);      
      } catch (error) {      
          return res.status(config.STATUS.INTERNAL).json({ message: config.INTERAL_ERROR_MSG });
      }
    }

    
    /**
     * @swagger
     * /api/ongs/:id:
     *  get: 
     *    tags: ['ongs']
     *    description: Get ong by ong_id
     *    parameters:
     *        - name: x-access-token
     *          description: Type a valid JWT
     *          paramType: header
     *          required: true
     *          dataType: string    
     *        - name: id
     *          description: Type a valid ong_id
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
    */

    app.post('/api/ong',create)
    app.use('/api/ongs/',authMiddleware,list);   
    app.use('/api/ong/:id/',authMiddleware,listById);   

};