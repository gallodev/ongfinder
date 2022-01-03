module.exports = (app) => {            
    const { models } = app;        
    const { Ong } = models;     

    const getOngs = async (id: number,offset: number = 0,limit: number = 10) => {        
        const ongs = await Ong.getOngs(id,offset,limit);         
        return ongs;
    }    

    return {
        getOngs,
    }
}