import { User } from '../types/';

module.exports = (app) => { 
    const { database } = app;    
    const entity = 'users'; 
    
    const getMaxId = async () => {
        return await database.connection(entity).select("id").orderBy("id", "desc").first();
    }

    const createUser = async (userData: User) => {    
        const { id } = await getMaxId();        
        const data = {
            id: (id + 1),
            ...userData,
        };                

        return await database.connection(entity).insert(data,['id']).into(entity);        
    }


    return {        
        createUser,
    }
}