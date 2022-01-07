import { IConfig } from '../types';


const config: IConfig = {
    STATUS: {
        OK: 200,
        INTERNAL: 500,
        CREATED: 201,
        UNATHORIZED: 401,
    },
    INTERAL_ERROR_MSG : 'Ocorreu uma falha interna no servidor.'
};


module.exports = (): IConfig => (config);