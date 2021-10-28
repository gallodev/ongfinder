const cheerio = require('cheerio');
const fs = require('fs');

const getEl = (data) => {    
    return cheerio.load(data,{  decodeEntities: true });
}

const getTableLink = ($) => {
    const links = []; 

    $('.table-striped').find('tr').find('td').find('a').each((index,item) => {
        links.push($(item).attr('href').toString());
    });

    return links;
}


const getName = ($) => {
    const [column,values] = [];

    console.log($('.col-md-8').find('.table-striped').html())

    return '';
}

const getInfo = () => {
    console.log('meu pau !')
}


module.exports = { getEl, getTableLink, getName };