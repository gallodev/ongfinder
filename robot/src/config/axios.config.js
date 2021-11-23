const axios = require('axios');

const getBaseURL = () => {   
  return `http://www.ongsbrasil.com.br/`;
};

const a = 'http://www.ongsbrasil.com.br/default.asp?Pag=54&Estado=SP&Cidade=Campinas&Origem=Grupos-de-Voluntarios-em-Campinas-SP'

const useRequests = () => {
  return axios.create({ baseURL: getBaseURL() });
};

module.exports = { useRequests };