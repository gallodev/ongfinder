import { Category, queryParams } from '../types/';

module.exports = (app) => {
    const { database } = app;
    const entity = 'ong_category';

    const getOngCategoryById = async({ id }: queryParams): Promise<Category> => {
        if(id) {
            return await database.connection(entity).where("id",id).first();
        }
    }

    const getOngCategory = async ({ offset, limit }: queryParams): Promise<Category|Category[]> => {        
        return await database.connection(entity).offset(offset).limit(limit);        
    }

    const getOngCategoryByName = async (category: string) => {
        return await database.connection(entity).where("category",category).first();
    }        

    const getMaxId = async (): Promise<Category> => {
        return await database.connection(entity).select("id").orderBy("id", "desc").first();
    }

    const createCategory = async (category: Category): Promise<Category> => {    
        const max_id = await getMaxId();        
        const data = {
            id: (max_id.id + 1),
            category: category
        };        

        return await database.connection(entity).insert(data,['id']).into(entity);        
    }

    return { 
        getOngCategoryById,
        getOngCategory,
        getOngCategoryByName,
        createCategory
    }
}