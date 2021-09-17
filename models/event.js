var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var EventSchema = new Schema({
    name: {type: String, required: true, min: 3, max: 20},
    date: {type: Date, required: true},
    max_tickets: {type: Number, required: true},
});

EventSchema.pre('remove', function(next) {
  this.model('Ticket').deleteMany({ event_id: this._id });
  next();
});


// Virtual for this Event instance URL.
EventSchema
.virtual('url')
.get(function () {
  return '/events/'+this._id;
});

// Export model.
module.exports = mongoose.model('Event', EventSchema);