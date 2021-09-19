var express = require('express');
var router = express.Router();
const passport = require('passport');
const permissions = require('../permissionsMiddleware/permissions');


var event_controller = require('../controllers/eventController');

router.get('/', passport.authenticate('jwt', { session: false }), event_controller.event_list);
router.get('/all', passport.authenticate('jwt', { session: false }), permissions.checkIsSuperadmin, event_controller.event_list_all);
router.get('/:id', passport.authenticate('jwt', { session: false }), event_controller.event_detail);
router.post('/', passport.authenticate('jwt', { session: false }), permissions.checkIsAdminBasic, event_controller.event_create);
router.put('/:id', passport.authenticate('jwt', { session: false }), permissions.checkIsSuperadmin, event_controller.event_update);
router.delete('/:id', passport.authenticate('jwt', { session: false }), permissions.checkIsSuperadmin, event_controller.event_delete);

module.exports = router;