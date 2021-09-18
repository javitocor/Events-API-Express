var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var RoleSchema = new Schema({
    name : { type: String, required: true}
});


// Export model.
module.exports = mongoose.model('Role', TicketSchema);