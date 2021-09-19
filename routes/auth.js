var express = require('express');
var router = express.Router();



var auth_controller = require('../controllers/authController');

router.post("/signup", auth_controller.signup_post);

router.post("/login", auth_controller.login_post);

router.get("/logout", passport.authenticate('jwt', { session: false }), auth_controller.logout_get);

module.exports = router;
