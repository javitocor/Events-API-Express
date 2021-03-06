var express = require('express');
var router = express.Router();
const passport = require('passport');
const permissions = require('../permissionsMiddleware/permissions');

var ticket_controller = require('../controllers/ticketController');

router.get('/', passport.authenticate('jwt', { session: false }), permissions.checkIsAdminBasic, ticket_controller.ticket_list);
router.post('/', passport.authenticate('jwt', { session: false }), permissions.checkIsAdminManager, ticket_controller.ticket_create);
router.put('/:id', passport.authenticate('jwt', { session: false }), permissions.checkIsAdminBasic, ticket_controller.ticket_update);
router.delete('/:id', passport.authenticate('jwt', { session: false }), permissions.checkIsSuperadmin, ticket_controller.ticket_delete);

module.exports = router;