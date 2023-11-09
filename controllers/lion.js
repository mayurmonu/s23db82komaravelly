var lion = require('../models/lion');
// List of all lions
exports.lion_list = async function(req, res) {
    try{
        thelions = await lion.find();
        res.send(thelions);
        }
        catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
        } 
};
// for a specific lion.
exports.lion_detail = function(req, res) {
 res.send('NOT IMPLEMENTED: lion detail: ' + req.params.id);
};
// Handle lion create on POST.
exports.lion_create_post = function(req, res) {
 res.send('NOT IMPLEMENTED: lion create POST');
};
// Handle lion delete form on DELETE.
exports.lion_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: lion delete DELETE ' + req.params.id);
};
// Handle lion update form on PUT.
exports.lion_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: lion update PUT' + req.params.id);
};
// VIEWS
// Handle a show all view
exports.lion_view_all_Page = async function(req, res) {
    try{
    thelions = await lion.find();
    res.render('lion', { title: 'lion Search Results', results: thelions });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };
   // Handle lion create on POST.
exports.lion_create_post = async function(req, res) {
    console.log(req.body)
    let document = new lion();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"lion_type":"goat", "cost":12, "size":"large"}
    document.lion_color = req.body.lion_color;
    document.lion_breed = req.body.lion_breed;
    document.lion_price = req.body.lion_price;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };