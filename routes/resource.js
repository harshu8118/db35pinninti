var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var Lion_controller = require('../controllers/Lion');

/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
router.get('/', Lion_controller.Lion_view_all_Page );
/// Lion ROUTES ///
// POST request for creating a Lion.
router.post('/Lion', Lion_controller.Lion_create_post);
// DELETE request to delete Lion.
router.delete('/Lion/:id', Lion_controller.Lion_delete);
// PUT request to update Lion.
router.put('/Lion/:id',
Lion_controller.Lion_update_put);
// GET request for one Lion.
router.get('/Lion/:id', Lion_controller.Lion_detail);
// GET request for list of all Lion items.
router.get('/Lion', Lion_controller.Lion_list);
module.exports = router;
