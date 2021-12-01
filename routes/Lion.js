var express = require('express');
var router = express.Router();
var Lion_controlers = require('../controllers/Lion');

const secured = (req, res, next) => {
    if (req.user){
    return next();
    }
    req.session.returnTo = req.originalUrl;
    res.redirect("/login");
    }
/* GET update Lion page */ 
// router.get('/update', Lion_controlers.costume_update_Page); 
/* GET home page. */
router.get('/', Lion_controlers.Lion_view_all_Page);

router.get('/detail', Lion_controlers.Lion_view_one_Page);
/* GET create Lion page */
router.get('/create', secured, Lion_controlers.Lion_create_Page);
/* GET create update page */
router.get('/update', secured, Lion_controlers.Lion_update_Page);
/* GET create Lion page */
router.get('/delete', secured, Lion_controlers.Lion_delete_Page);

module.exports = router;
