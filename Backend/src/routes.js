const { Router } = require('express');
const DevController = require(`./controllers/DevController`);
const SearchController = require(`./controllers/SearchController`);

const routes = Router();

//Route Params: req.params (Identificar um recurso em alteração ou delete)
// Métodos HTTP: GET, POST, PUT, DELETE

//Tipos de parâmetros:

//Query Params: req.query (filtros, ordenação, paginação...)
//Route Params: req.params (Identificar um recurso em alteração ou delete)
//Body: req.body (dados para criação ou alteração)

//MongoDB (Não Relacional)

//------------------dev---------------------------
routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);
routes.delete(`/deletar`, DevController.destroy);
routes.put(`/editar`,DevController.edit);
//-------------------------------------------------

routes.get(`/search`, SearchController.index);
module.exports = routes;