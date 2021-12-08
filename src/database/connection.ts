const knex = require('knex');
const config = require('../../knexfile.ts');

const connection = knex(config);

module.exports = () => connection;