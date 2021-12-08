// Update with your config settings.
const config = require('./config.ts');
const database_settings = config().database;

console.log(database_settings);

module.exports = {    
    client: 'pg',
    connection: database_settings,
    pool: { min: 2, max: 7 },
    debug: true,    
    migrations: {      
      tableName: 'migrations',
      directory: './database/migrations',
    }  
};