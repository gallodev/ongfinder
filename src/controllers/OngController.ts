module.exports = (app) => {            
    const { models } = app;        
    const { Ong, Category } = models;         

    const getOngs = async (id: number,offset: number = 0,limit: number = 10) => {        
        const ongs = await Ong.getOngs(id,offset,limit);         
        return ongs;
    }    

    const getOngCategorys = async (id: number, offset: number = 0, limit:number = 10) => {
        const categorys = await Category.getOngCategory(id,offset,limit);
        return categorys;
    }

    const createCategory = async (category: string) => {
        const category_id = await Category.createCategory(category);        
        return category_id[0];
    }

    return {
        getOngs,
        getOngCategorys,
        createCategory
    }
}