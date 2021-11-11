var Lion = require('../models/Lion');
// List of all Lion
exports.Lion_list = function(req, res) {
 res.send('NOT IMPLEMENTED: Lion list');
};
// for a specific Lion.
exports.Lion_detail = function(req, res) {
 res.send('NOT IMPLEMENTED: Lion detail: ' + req.params.id);
};
// Handle Lion create on POST.
exports.Lion_create_post = function(req, res) {
 res.send('NOT IMPLEMENTED: Lion create POST');
};
// Handle Lion delete form on DELETE.
exports.Lion_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: Lion delete DELETE ' + req.params.id);
};
// Handle Lion update form on PUT.
exports.Lion_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: Lion update PUT' + req.params.id);
};