require('dotenv').config({  
  path: process.env.NODE_ENV === "test" ? ".env.testing" : ".env"
});
// Update with your config settings.
// const config = require('./config.ts');
// const database_settings = config().database;

if(process.env.DATABASE_URL === '') { 
  throw new Error('Inconsistent .env please follow .env.sample')
}

console.log(process.env.DATABASE_URL);

module.exports = {    
    client: 'pg',
    connection: process.env.DATABASE_URL,
    pool: { min: 2, max: 7 },
    debug: true,    
    migrations: {      
      tableName: 'migrations',
      directory: './database/migrations',
    }  
};