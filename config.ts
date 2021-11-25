require('dotenv').config({  
  path: process.env.NODE_ENV === "test" ? ".env.testing" : ".env"
});

module.exports = () => ({
    port: process.env.DB_PORT || 3081,
    database: {
      host: process.env.DB_HOST,
      user: process.env.DB_USER || '',
      password: process.env.DB_PASSWORD || '',
      database: process.env.DB,
    },
  });