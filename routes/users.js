var express = require('express');
var router = express.Router();

var user_controller = require('../controllers/userController');

router.get('/', user_controller.user_list);
router.get('/:id', user_controller.user_detail);
router.put('/:id', user_controller.user_update);
router.delete('/:id', user_controller.user_delete);


module.exports = router;
