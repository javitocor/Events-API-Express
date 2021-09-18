var express = require('express');
var router = express.Router();
const passport = require('passport');


var event_controller = require('../controllers/eventController');

router.get('/', event_controller.event_list);
router.get('/all', event_controller.event_list_all);
router.get('/:id', event_controller.event_detail);
router.post('/', passport.authenticate('bearer', { session: false }), event_controller.event_create);
router.put('/:id', passport.authenticate('bearer', { session: false }), event_controller.event_update);
router.delete('/:id', passport.authenticate('bearer', { session: false }), event_controller.event_delete);

module.exports = router;