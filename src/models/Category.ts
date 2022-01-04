module.exports = (app) => {
    const { database } = app;
    const entity = 'ong_category';

    const getOngCategory = async (id: number,offset: number,limit: number) => {
        if(id) {
            return await database.connection(entity).where("id",id).first();
        }

        return await database.connection(entity).offset(offset).limit(limit);        
    }

    const getOngCategoryByName = async (category: string) => {
        return await database.connection(entity).where("category",category).first();
    }        

    const getMaxId = async () => {
        return await database.connection(entity).select("id").orderBy("id", "desc").first();
    }

    const createCategory = async (category: string) => {    
        const max_id = await getMaxId();        
        const data = {
            id: (max_id.id + 1),
            category: category
        };        

        return await database.connection(entity).insert(data,['id']).into(entity);        
    }

    return { 
        getOngCategory,
        getOngCategoryByName,
        createCategory
    }
}