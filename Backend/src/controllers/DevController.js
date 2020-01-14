const axios = require('axios');
const Dev = require('../models/Dev');
const parseStringAsArray = require(`../utils/parseStringAsArray`);

module.exports = {
    async index(request, response){ return response.json(await Dev.find()) },

    async store(request, response){
        const {github_userName, techs, latitude, longitude} = request.body;

        let developer = await Dev.findOne({github_userName});
        if(developer)
            return response.json(developer);
    
        const apiResponse = await axios.get(`https://api.github.com/users/${github_userName}`);
        const { name = login, avatar_url, bio} = apiResponse.data;
    
        const arrayTechs = parseStringAsArray(techs);
    
        const location = {
            type:`Point`,
            coordinates:[longitude, latitude]
        }
    
        developer = await Dev.create({
            github_userName,
            name,
            avatar_url,
            bio,
            techs:arrayTechs,
            location
        });

        return response.json(developer);
    }
}