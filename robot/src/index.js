const { getONG } = require('./controller/Ong.controller');

getONG().then(ong => {
    console.log('ae karaiio');
    console.log(ong);
}).catch(err => {
    console.log(err);
})