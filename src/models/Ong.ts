module.exports = (app) => { 
    const { database } = app;

    const getOngs = async (id: number,offset: number,limit: number) => {   

        if(id) {
            return await database.connection('ongs').where('id',id).first();
        }

        return await database.connection('ongs').offset(offset).limit(limit);        
    }
    
    const getOngByName = async(ongName: string) => {
        return await database.connection("ongs").where("ong_name",ongName);
    }        

    return {
        getOngs,
        getOngByName,
    }
}