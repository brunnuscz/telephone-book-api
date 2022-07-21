const express = require('express');
const TelephoneController = require('../controllers/TelephoneController');
const routes = express.Router();

routes.get('/all/telephone', TelephoneController.all_telephone);
routes.post('/add/telephone', TelephoneController.add_telephone);
routes.put('/update/telephone/:id', TelephoneController.update_telephone);
routes.delete('/delete/telephone/:id', TelephoneController.delete_telephone);
routes.get('/search/telephone/:id', TelephoneController.search_telephone);

module.exports = routes;