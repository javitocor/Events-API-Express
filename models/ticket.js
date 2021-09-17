var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');

var Schema = mongoose.Schema;

var TicketSchema = new Schema({
    owner: {type: Schema.ObjectId, ref: 'User', required: true},
    event_id: {type: Schema.ObjectId, ref: 'Event', required: true},
    isValidated : { type: Boolean, default: false}
});

TicketSchema.plugin(autoIncrement.plugin, { model: 'Ticket', field: 'ticket_number' });

// Virtual for this Ticket instance URL.
TicketSchema
.virtual('url')
.get(function () {
  return '/Tickets/'+this._id;
});

// Export model.
module.exports = mongoose.model('Ticket', TicketSchema);