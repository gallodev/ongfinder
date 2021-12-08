module.exports = (app) => {
    const { database } = app;

    const getOngCategorys = async (limit: number) => {
        return await database.connection('ong_category').limit(limit);        
    }

    const getOngCategory = async (category: string) => {
        return await database.connection("ong_category").where("category",category).limit(1);
    }    

    return { 
        getOngCategorys,
        getOngCategory
    }
}