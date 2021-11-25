// const { RocketService } = require('../services/RocketService');
// const api = RocketService();

module.exports = {
    getData : (request, response) => {        
        return response.json({
            status: 200,
            error: `it's work !`,
        })        
    },
}