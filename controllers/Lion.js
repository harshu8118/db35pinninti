var Lion = require('../models/Lion');
// List of all Lion
exports.Lion_list = async function(req, res) {
    try{
    theLion = await Lion .find();
    res.send(theLion);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };
// for a specific Lion.
exports.Lion_detail = function(req, res) {
 res.send('NOT IMPLEMENTED: Lion detail: ' + req.params.id);
};
// Handle Lion create on POST.
exports.Lion_create_post = async function(req, res) {
    console.log(req.body)
    let document = new Lion();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"Lion_type":"goat", "cost":12, "size":"large"}
    document.Lion_type = req.body.Lion_type;
    document.size = req.body.size;
    document.cost = req.body.cost;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };
// Handle Lion delete form on DELETE.
exports.Lion_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: Lion delete DELETE ' + req.params.id);
};
// Handle Lion update form on PUT.
exports.Lion_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: Lion update PUT' + req.params.id);
};
exports.Lion_view_all_Page = async function(req, res) {
    try{
    theLion = await Lion.find();
    res.render('Lion', { title: 'Lion Search Results', results: theLion });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };
   