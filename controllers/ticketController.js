const Ticket = require('../models/ticket');

exports.ticket_create = async (req, res, next) => {
  const ticket = new Ticket({
    owner: req.user,
    event: req.event_id,
  });
  try {
    await ticket.save();
    res.status(201);
    res.send('Ticket created successfully');
  } catch (error) {
    res.json(error)
    next();
  }
};
exports.ticket_update = async (req, res, next) => {
  const { isValidated } = req.body;
  const ticket = new Ticket({
    isValidated
  });
  try {
    await Ticket.findByIdAndUpdate(req.params.id, ticket);
    res.status(200);
    res.send('Ticket updated successfully');
  } catch (error) {
    res.json(error)
    next();
  }
};
exports.ticket_delete = async (req, res, next) => {
  try {
    await Ticket.findByIdAndDelete(req.params.id);
    res.status(200);
    res.send('Ticket deleted successfully');
  } catch (error) {
    res.json(error)
    next();
  }
};