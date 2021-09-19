const Ticket = require('../models/ticket');
const Event = require('../models/event');
const jwt = require('jsonwebtoken');


exports.ticket_list = async (req, res, next) => {
  try {
    const tickets = await Ticket.find({event_id: req.event_id}).populate('owner', "-__v -role").populate('event_id', " -__v").select("-__v").exec();
    res.json(tickets);
  } catch (error) {
    res.json(error)
    next();
  }
};

exports.ticket_create = async (req, res, next) => {
  const ticket = new Ticket({
    owner: req.user._id,
    event_id: req.event_id,
  });
  try {
    const ticketCount = await Ticket.countDocuments({event_id: req.event_id}).exec();
    const event = await Event.findById(req.event_id);
    if (ticketCount < event.max_tickets) {
      await ticket.save();
      res.status(201);
      res.json({message: 'Ticket created successfully'});
    } else {
      res.json({message: 'Sold Out! Cannot create ticket!'});
    }
    
  } catch (error) {
    res.json(error)
    next();
  }
};
exports.ticket_update = async (req, res, next) => {
  const { isValidated } = req.body;
  try {
    await Ticket.findByIdAndUpdate(req.params.id, isValidated);
    res.status(200);
    res.json({message:'Ticket updated successfully'});
  } catch (error) {
    res.json(error)
    next();
  }
};
exports.ticket_delete = async (req, res, next) => {
  try {
    await Ticket.findByIdAndDelete(req.params.id);
    res.status(200);
    res.json({message:'Ticket deleted successfully'});
  } catch (error) {
    res.json(error)
    next();
  }
};