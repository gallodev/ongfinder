module.exports = (app) => {            
    const { models } = app;        
    const { Ong } = models;     

    const getOngs = async () => {        
        const ongs = await Ong.getOngs(10);         
        return ongs;
    }    

    return {
        getOngs,
    }
}