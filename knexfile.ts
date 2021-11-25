// Update with your config settings.
const config = require('./config');
const database_settings = config().database;
const mdb = require('knex-mariadb');

console.log(database_settings);

module.exports = {    
    client: mdb,
    connection: database_settings,    
    migrations: {      
      tableName: 'migrations',
      directory: './database/migrations',
    }  
};