import { Ong, queryParams } from '../types/';

module.exports = (app) => { 
    const { database } = app;    
    const entity = 'ongs';

    const getOngById = async ({ id }: queryParams): Promise<Ong> => {        
        if(id) {            
            return await database.connection(entity).where('id',id).first();
        }
    };

    const getOngs = async ({ offset, limit }: queryParams): Promise<Ong[]> => {           
        return await database.connection(entity).offset(offset).limit(limit);        
    }
    
    const getOngByName = async(ongName: string): Promise<Ong> => {
        return await database.connection(entity).where("ong_name",ongName);
    } 
    
    const getMaxId = async (): Promise<Ong> => {
        return await database.connection(entity).select("id").orderBy("id", "desc").first();
    }

    const createOng = async (ongData: Ong): Promise<Ong> => {    
        const max_id = await getMaxId();        
        const data = {
            id: (max_id.id + 1),
            ...ongData,
        };         
        
        console.log(data);

        return await database.connection(entity).insert(data,['id']).into(entity);        
    }


    return {
        getOngs,
        getOngById,
        getOngByName,
        createOng,
    }
}