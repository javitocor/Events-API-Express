var express = require('express');
var router = express.Router();
const passport = require('passport');
const permissions = require('../permissionsMiddleware/permissions');

var user_controller = require('../controllers/userController');


router.get('/', passport.authenticate('jwt', { session: false }), permissions.checkIsAdminBasic, user_controller.user_list);
router.get('/:id', passport.authenticate('jwt', { session: false }), permissions.checkIsAdminManager, user_controller.user_detail);
router.put('/:id', passport.authenticate('jwt', { session: false }), permissions.checkIsSuperadmin, user_controller.user_update);
router.delete('/:id', passport.authenticate('jwt', { session: false }), permissions.checkIsSuperadmin, user_controller.user_delete);


module.exports = router;
