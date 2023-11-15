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
//Handle lion update form on PUT.
exports.lion_update_put = async function(req, res) {
console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
try {
let toUpdate = await lion.findById( req.params.id)
// Do updates of properties
if(req.body.lion_type)
toUpdate.lion_type = req.body.lion_type;
if(req.body.lion_breed) toUpdate.lion_breed = req.body.lion_breed;
if(req.body.lion_price) toUpdate.lion_price = req.body.lion_price;
let result = await toUpdate.save();
console.log("Sucess " + result)
res.send(result)
} catch (err) {
res.status(500)
res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
}
};