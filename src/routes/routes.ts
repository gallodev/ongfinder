
import { Request, Response } from 'express';

module.exports = (app) => {        
    const statusMonitor = require('express-status-monitor')({ path: '' });        
    
    const { OngController } = app.controllers;    
  
    const ongList = async (req: Request, res: Response) => {      
      try {         
        const ongs = await OngController.getOngs();        
        return res.status(200).json(ongs);
      } catch (error) {                
        return res.status(500).json({ message: 'Ocorreu uma falha interna no servidor.' });
      }
    };        
  
    app.get('/',(req: Request,res: Response) => {        
        return res.status(200).send("ONG Finder API");
    });
    
    app.route('/api/ongs')
      .get(ongList);      

    app.get('/status/', statusMonitor.pageRoute);    

  };
  