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
// for a specific lion.
exports.lion_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await lion.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
    };
    
// Handle lion update form on PUT.
exports.lion_update_put = async function(req, res) {
    console.log(`update on id ${req.params.id} with body
    ${JSON.stringify(req.body)}`)
    try {
    let toUpdate = await lion.findById( req.params.id)
    // Do updates of properties
    if(req.body.lion_color)
    toUpdate.lion_color = req.body.lion_color;
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
    // Handle lion delete on DELETE.
exports.lion_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    result = await lion.findByIdAndDelete( req.params.id)
    console.log("Removed " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
    };
    // Handle a show one view with id specified by query
exports.lion_view_one_Page = async function(req, res) {
console.log("single view for id " + req.query.id)
try{
result = await lion.findById( req.query.id)
res.render('liondetail',
{ title: 'lion Detail', toShow: result });
}
catch(err){
res.status(500)
res.send(`{'error': '${err}'}`);
}
};
// Handle building the view for creating a lion.
// No body, no in path parameter, no query.
// Does not need to be async
exports.lion_create_Page = function(req, res) {
    console.log("create view")
    try{
    res.render('lioncreate', { title: 'lion Create'});
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };
    // Handle building the view for updating a lion.
// query provides the id
exports.lion_update_Page = async function(req, res) {
console.log("update view for item "+req.query.id)
try{
let result = await lion.findById(req.query.id)
res.render('lionupdate', { title: 'lion Update', toShow: result });
}
catch(err){
res.status(500)
res.send(`{'error': '${err}'}`);
}
};
// Handle a delete one view with id from query
exports.lion_delete_Page = async function(req, res) {
console.log("Delete view for id " + req.query.id)
try{
result = await lion.findById(req.query.id)
res.render('liondelete', { title: 'lion Delete', toShow:
result });
}
catch(err){
res.status(500)
res.send(`{'error': '${err}'}`);
}
};