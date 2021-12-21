import { Request, Response } from 'express';

module.exports = (app): void => {
    const { OngController } = app.controllers;

    const ongList = async (req: Request, res: Response) => {     
        
        const { id } = req.params;
        const { limit } = req.query;
        
        try {         
          const ongs = await OngController.getOngs(id,limit);        
          return res.status(200).json(ongs);
        } catch (error) {                
          return res.status(500).json({ message: 'Ocorreu uma falha interna no servidor.' });
        }
    };        

    
    /**
     * @swagger
     * /api/ongs:
     *  get: 
     *    tags: ['ongs']
     *    description: Get list of 10 ongs
     *    responses: 
     *      '200': 
     *        description: Return data
    */

    app.route('/api/ongs/:id/').get(ongList);   

};