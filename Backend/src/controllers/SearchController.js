const Dev = require('../models/Dev')
const StringToArray = require ('../utils/parseStringAsArray')


module.exports = {
    async index (req, res){
        const { latitude, longitude, techs } = req.query;

        const TechsArray = StringToArray (techs);

        const devs = await Dev.find({
            techs : {
                $in: TechsArray
            },
            // location:{
            //     $near: {
            //         $geometry: {
            //             type: 'Point',
            //             coordinates: [longitude, latitude],
            //         },
            //         $maxDistance: 10000,
            //     }
            // }
        });

        return res.json(devs)
    }
}