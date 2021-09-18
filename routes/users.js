var express = require('express');
var router = express.Router();
const passport = require('passport');

var user_controller = require('../controllers/userController');

router.get('/', passport.authenticate('bearer', { session: false }), user_controller.user_list);
router.get('/:id', passport.authenticate('bearer', { session: false }), user_controller.user_detail);
router.put('/:id', passport.authenticate('bearer', { session: false }), user_controller.user_update);
router.delete('/:id', passport.authenticate('bearer', { session: false }), user_controller.user_delete);


module.exports = router;
