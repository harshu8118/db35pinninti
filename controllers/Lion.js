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
exports.Lion_delete = async function(req, res) { 
    console.log("delete "  + req.params.id) 
    try { 
        result = await Lion.findByIdAndDelete( req.params.id) 
        console.log("Removed " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": Error deleting ${err}}`); 
    } 
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
   exports.Lion_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await Lion.findById( req.query.id)
    res.render('Liondetail',
   { title: 'Lion Detail', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };
   // Handle building the view for creating a Lion.
// No body, no in path parameter, no query.
// Does not need to be async
exports.Lion_create_Page = function(req, res) {
    console.log("create view")
    try{
    res.render('Lioncreate', { title: 'Lion Create'});
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };
   // Handle building the view for updating a Lion.
// query provides the id
exports.Lion_update_Page = async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
    let result = await Lion.findById(req.query.id)
    res.render('lionupdate', { title: 'Lion Update', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };

   // Handle a delete one view with id from query
exports.Lion_delete_Page = async function(req, res) {
    console.log("Delete view for id " + req.query.id)
    try{
    result = await Lion.findById(req.query.id)
    res.render('Liondelete', { title: 'Lion Delete', toShow:
   result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };