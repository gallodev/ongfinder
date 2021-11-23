const { getONG } = require('./controller/Ong.controller');

getONG().then(ong => {
    console.log('ONGS ');
    console.log(ong);
}).catch(err => {
    console.log(err);
})