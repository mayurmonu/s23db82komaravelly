var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var lion_controller = require('../controllers/lion');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// lion ROUTES ///
// POST request for creating a lion.
router.post('/lions', lion_controller.lion_create_post);
// DELETE request to delete lion.
router.delete('/lions/:id', lion_controller.lion_delete);
// PUT request to update lion.
router.put('/lions/:id', lion_controller.lion_update_put);
// GET request for one lion.
router.get('/lions/:id', lion_controller.lion_detail);
// GET request for list of all lion items.
router.get('/lions', lion_controller.lion_list);
module.exports = router;