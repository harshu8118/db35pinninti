var express = require('express');
var router = express.Router();
var Lion_controlers = require('../controllers/Lion');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('Lion', { title: 'Express' });
});

router.get('/detail', Lion_controlers.Lion_view_one_Page);
/* GET create Lion page */
router.get('/create', Lion_controlers.Lion_create_Page);
/* GET create update page */
router.get('/update', Lion_controlers.Lion_update_Page);
/* GET create Lion page */
router.get('/delete', Lion_controlers.Lion_delete_Page);

module.exports = router;
