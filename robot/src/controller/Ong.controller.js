const { useRequests } = require('../config/axios.config');
const { getEl, getTableLink, getName} = require('../utils/Format.utils');
const fs = require('fs');
var iconv = require('iconv-lite');

const axios = useRequests();

const initURL = `default.asp?Pag=1&Destino=Instituicoes`;
const trackCities = 'SP';


const getONG = () => {
    return new Promise(async (resolve, reject) => {
        const ongLinks = await getOngLists();        
        ongLinks.map((ongLink,index) => {
            axios(ongLink).then(response => {
                const $ = getEl(response.data);
                const ongURL = getTableLink($);                                            
                    getTableLinks(ongURL,true).then(res => {                
                            return resolve(res);
                    }).catch(err => {                    
                            return reject(err);
                    });          
            }).catch(error => {
                reject(error);
            });
        });
    });
};

const getTableLinks = (links,debug=false) => {
    return new Promise((resolve, reject) => {
        const a = [];
        try {                        
            links.map((link) => {                                
                const formatLink = iconv.encode(link,'UTF-8');                 
                a.push(formatLink);
                                
                /* axios(link.replace(' ','%20')).then(response => {
                    const $ = getEl(response.data);
                    const info = getInfo($);                    
                    return;                    
                    
                    return resolve(links);
                }).catch(error => {
                    return reject(error);
                }); */
            });                
            var stream = fs.createWriteStream('ong-info.txt');
            a.forEach( function (item,index) {
                stream.write(item + "\n");
            });
            
            stream.end();            
        } catch (error) {
            return reject(error)
        }    
    });
};
    
const getOngLists = () => {
    return new Promise((resolve, reject) => {
        console.log('init robot ...');
        fs.unlink('ong-info.txt',() => {})
        axios(initURL).then(response => {
            const $ = getEl(response.data);
            const citiesURL = getTableLink($);            
            getCityDetail(citiesURL).then(res => {                
                return resolve(res);
            }).catch(err => {
                return reject(err);
            });
        });
    });
}

const getCityDetail = (citiesURL) => {
    return new Promise((resolve, reject) => {
        try {
            citiesURL.map((cityHref) => {
                if(cityHref.indexOf(trackCities) !== -1) {
                axios(cityHref).then(response => {
                    const $ = getEl(response.data);
                    const links = getTableLink($);
                    return resolve(links);
                });
                }
            });
        } catch (error) {
            return reject(error)
        }
    });
};


module.exports = {
    getCityDetail,
    getOngLists,
    getONG
}