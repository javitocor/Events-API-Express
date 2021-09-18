var express = require('express');
var router = express.Router();
const passport = require('passport');

var ticket_controller = require('../controllers/ticketController');

router.post('/', passport.authenticate('bearer', { session: false }), ticket_controller.ticket_create);
router.put('/:id', passport.authenticate('bearer', { session: false }), ticket_controller.ticket_update);
router.delete('/:id', passport.authenticate('bearer', { session: false }), ticket_controller.ticket_delete);

module.exports = router;