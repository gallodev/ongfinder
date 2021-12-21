module.exports = (app) => { 
    const { database } = app;

    const getOngs = async (id: number, limit: number) => {   

        if(id) {
            return await database.connection('ongs').where('id',id).limit(1);
        }

        return await database.connection('ongs').limit(limit);        
    }
    
    const getOngByName = async(ongName: string) => {
        return await database.connection("ongs").where("ong_name",ongName).limit(1);
    }        

    return {
        getOngs,
        getOngByName,
    }
}