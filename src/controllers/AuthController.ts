const bcrypt = require('bcrypt');

module.exports = (app) => {
    const { models } = app;        
    const { Ong, User } = models;         
    
    const isValid = (email: string, password: string) => {
        console.log("opa");
        if(!email || !password) throw new Error(`You need pass required parameters`);
        bcrypt.hash(password, 2).then(function(hash) {
            console.log(hash);
        });

    }

   return {
       isValid,
   }; 
}