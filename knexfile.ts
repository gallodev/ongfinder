require('dotenv').config({  
  path: process.env.NODE_ENV === "test" ? ".env.testing" : ".env"
});

if(process.env.DATABASE_URL === '') { 
  throw new Error('Inconsistent .env please follow .env.sample')
}

module.exports = {    
    client: 'pg',
    connection: { 
      connectionString: process.env.DATABASE_URL,
      ssl: { rejectUnauthorized: false }
    },    
    pool: { min: 2, max: 7 }, 
    migrations: {      
      tableName: 'migrations',
      directory: './database/migrations',
      extension: 'ts',
    }  
};