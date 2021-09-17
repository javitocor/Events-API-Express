var express = require('express');
var router = express.Router();

var ticket_controller = require('../controllers/ticketController');

router.post('/', ticket_controller.ticket_create);
router.put('/:id', ticket_controller.ticket_update);
router.delete('/:id', ticket_controller.ticket_delete);

module.exports = router;