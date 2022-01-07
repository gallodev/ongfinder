
import { Ong, queryParams } from '../types/';

module.exports = (app) => {            
    const { models } = app;        
    const { Ong, Category } = models;         

    const getOngs = async ({ id, offset, limit } : queryParams) => {        
        const ongs = await Ong.getOngs(id,offset,limit);         
        return ongs;
    }    

    const getOngCategorys = async ({ id, offset, limit } : queryParams) => {
        const categorys = await Category.getOngCategory(id,offset,limit);
        return categorys;
    }

    const createCategory = async (category: string) => {
        const category_id = await Category.createCategory(category);        
        return category_id[0];
    }

    const createOng = async (data: Ong) => {
        const ong_id = await Ong.createOng(data);
        return ong_id[0];
    }

    return {
        getOngs,
        getOngCategorys,
        createCategory,
        createOng
    }
}