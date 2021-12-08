module.exports = (app) => { 
    const { database } = app;

    const getOngs = async (limit: number) => {        
        return await database.connection('ongs').limit(limit);        
    }
    
    const getOng = async(ongName: string) => {
        return await database.connect("ongs").where("ong_name",ongName).limit(1);
    }

    return {
        getOngs,
        getOng,
    }
}