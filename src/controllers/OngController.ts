
import { Ong, Category, queryParams } from '../types/';

module.exports = (app) => {            
    const { models } = app;        
    const { Ong, Category } = models;         

    const getOngs = async (params: queryParams): Promise<Ong[]> => {                
        const ongs = await Ong.getOngs(params);         
        return ongs;
    }    

    const getOngsById = async (params: queryParams): Promise<Ong> => { 
        const ongs = await Ong.getOngById(params);                 
        return ongs;
    }

    const createOng = async (data: Ong): Promise<Ong> => {
        const ong_id = await Ong.createOng(data);
        return ong_id[0];
    }

    const getOngCategorys = async (params: queryParams): Promise<Category[]> => {
        const categorys = await Category.getOngCategory(params);
        return categorys;
    }

    const getOngCategoryById = async (params: queryParams): Promise<Category> => {
        const category = await Category.getOngCategoryById(params);
        return category;
    }

    const createCategory = async (category: string): Promise<Category> => {
        const category_id = await Category.createCategory(category);        
        return category_id[0];
    }


    return {
        getOngs,
        getOngsById,
        createOng,
        getOngCategorys,
        getOngCategoryById,
        createCategory,
    }
}