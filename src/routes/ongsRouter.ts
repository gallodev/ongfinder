import { Request, Response } from 'express';

module.exports = (app): void => {
    const { OngController } = app.controllers;
    const { authMiddleware } = app.libs.authMiddleware;

    const ongList = async (req: Request, res: Response) => {             
        const { id } = req.params;
        const { offset, limit } = req.query;
        
        try {         
          const ongs = await OngController.getOngs(id,offset,limit);        
          return res.status(200).json(ongs);
        } catch (error) {                
          return res.status(500).json({ message: 'Ocorreu uma falha interna no servidor.' });
        }
    };        

    
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
     *          dataType: string    
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

    app.use('/api/ongs/',authMiddleware,ongList);   
    app.use('/api/ongs/:id/',authMiddleware,ongList);   

};