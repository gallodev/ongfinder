module.exports = (app) => {            
    const { models } = app;        
    const { Ong } = models;     

    const getOngs = async (id: number,limit: number = 10) => {        
        const ongs = await Ong.getOngs(id,limit);         
        return ongs;
    }    

    return {
        getOngs,
    }
}