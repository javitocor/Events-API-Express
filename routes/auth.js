var express = require('express');
var router = express.Router();



var index_controller = require('../controllers/authController');

router.post("/signup", index_controller.signup_post);

router.post("/login", index_controller.login_post);

router.get("/logout", index_controller.logout_get);

module.exports = router;
