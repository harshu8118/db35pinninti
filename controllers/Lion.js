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
exports.Lion_detail = async function(req, res) { 
    console.log("detail"  + req.params.id) 
    try { 
        result = await Lion.findById( req.params.id) 
        res.send(result) 
    } catch (error) { 
        res.status(500) 
        res.send(`{"error": document for id ${req.params.id} not found`); 
    } 
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
exports.Lion_update_put = async function(req, res) { 
    console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`) 
    try { 
        let toUpdate = await Lion.findById( req.params.id) 
        // Do updates of properties 
        if(req.body.Lion_type)  
               toUpdate.Lion_type = req.body.Lion_type; 
        if(req.body.cost) toUpdate.cost = req.body.cost; 
        if(req.body.size) toUpdate.size = req.body.size; 
        let result = await toUpdate.save(); 
        console.log("Sucess " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`); 
    } 
}; 
//handle a show all views
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
   