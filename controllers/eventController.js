const Event = require('../models/event');
const Ticket = require('../models/ticket');

exports.event_list = async (req, res, next) => {
  try {
    const events = await Event.find({ ongoing: true }).select("-__v");
    res.json(events);
  } catch (error) {
    res.json(error)
    next();
  }
};;
exports.event_list_all = async (req, res, next) => {
  try {
    const events = await Event.find({});
    res.json(events);
  } catch (error) {
    res.json(error)
    next();
  }
};
exports.event_detail = async (req, res, next) => {
  try {
    const event = await Event.findById(req.params.id).select("-__v");
    const tickets = await Ticket.find({ event_id: event._id }).select("-__v");
    res.json({event, tickets});
  } catch (error) {
    res.json(error)
    next();
  }
};
exports.event_create = async (req, res, next) => {
  const {name, date, max_tickets, ongoing} = req.body;
  const event = new Event({
    name,
    date,
    max_tickets,
    ongoing,
  });
  try {
    await event.save();
    res.status(201);
    res.json({message: 'Event created successfully'});
  } catch (error) {
    res.json(error)
    next();
  }
};
exports.event_update = async (req, res, next) => {
  try {
    await Event.findByIdAndUpdate(req.params.id, { $set: req.body });
    res.status(200);
    res.json({message: 'Event updated successfully'});
  } catch (error) {
    res.json(error)
    next();
  }
};
exports.event_delete = async (req, res, next) => {
  try {
    await Event.findByIdAndDelete(req.params.id);
    res.status(200);
    res.json({message: 'Event deleted Successfully'});
  } catch (error) {
    res.json(error)
    next();
  }
};