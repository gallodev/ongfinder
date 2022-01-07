
import { User } from '../types';

module.exports = (app) => {
    const { models } = app;        
    const { Ong, User } = models;         
    
    
    const createUser = async (data: User) => {
        const ong_id = await Ong.createOng(data);
        return ong_id[0];
    }

    return {
        createUser
    };
}