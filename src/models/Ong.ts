import { Ong, queryParams } from '../types/';

module.exports = (app) => { 
    const { database } = app;    
    const entity = 'ongs';

    const getOngs = async ({ id , offset, limit }: queryParams) => {   
        if(id) {
            return await database.connection(entity).where('id',id).first();
        }

        return await database.connection(entity).offset(offset).limit(limit);        
    }
    
    const getOngByName = async(ongName: string) => {
        return await database.connection(entity).where("ong_name",ongName);
    } 
    
    const getMaxId = async () => {
        return await database.connection(entity).select("id").orderBy("id", "desc").first();
    }

    const createOng = async (ongData: Ong) => {    
        const max_id = await getMaxId();        
        const data = {
            id: (max_id.id + 1),
            ...ongData,
        };                

        return await database.connection(entity).insert(data,['id']).into(entity);        
    }


    return {
        getOngs,
        getOngByName,
        createOng,
    }
}