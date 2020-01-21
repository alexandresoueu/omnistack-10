const { Router } = require('express')
const devController = require('./controller/devController')
const searchController = require('./controller/searchController')
const routes = Router()

/**
 * Params types
 * 
 * Query Params: localhost:3333/users?alexandre (req.query Filters, ordination, pagination...)
 * Route Params: localhost:3333/users/1910 (req.params recognize a resource on alteration or deletion)
 * Body: PUT and POST (add ou change data through to body)
 */

routes.get('/listdevelopers', devController.index) 
routes.post('/developers', devController.store)

routes.get('/search', searchController.index)

module.exports = routes