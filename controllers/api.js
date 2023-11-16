// API for our resources
exports.api = function(req, res) {
    res.write('[');
    res.write('{"resource":"lions", ');
    res.write(' "verbs":["GET","PUT", "DELETE"] ');
    res.write('}');
    res.write(']')
    res.send();
   };
   //Handle building the view for updating a costume.
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
