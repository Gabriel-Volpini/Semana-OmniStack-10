const { Router } = require('express');
const DevController = require(`./controllers/DevController`);
const SearchController = require(`./controllers/SearchController`);

const routes = Router();

// Query Params: request.query (GET);
//Route Params: request.params(DELETE, PUT);

routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);

routes.get(`/search`, SearchController.index);
module.exports = routes;