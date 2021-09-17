var express = require('express');
var router = express.Router();


var index_controller = require('../controllers/indexController');

router.post("/signup", index_controller.signup_post);
//Post login page
router.post("/login", index_controller.login_post);
//Get logout
router.get("/logout", index_controller.logout_get);

module.exports = router;
