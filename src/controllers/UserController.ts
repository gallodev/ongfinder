
import { User } from '../types';

module.exports = (app) => {
    const { models } = app;        
    const { User } = models;         
    
    
    const createUser = async (data: User) => {
        const ong_id = await User.createUser(data);
        return ong_id[0];
    }

    return {
        createUser
    };
}