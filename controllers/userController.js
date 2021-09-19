const User = require('../models/user');
const Comment = require('../models/ticket');

exports.user_list = async (req, res, next) => {
  try {
    const users = await User.find({});
    res.json(users);
  } catch (error) {
    res.json(error)
    next();
  }
};
exports.user_detail = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    res.json(user);
  } catch (error) {
    res.json(error)
    next();
  }
};
exports.user_update = async (req, res, next) => {
  const {username, email, password, firstname, lastname, dob} = req.body;
  const user = {
    username,
    email,
    password,
    firstname,
    lastname,
    dob,
    /*_id: req.params.id*/
  };
  try {
    await User.findByIdAndUpdate(req.params.id, { $set: req.body });
    res.status(200);
    res.send('User updated successfully');
  } catch (error) {
    res.json(error)
    next();
  }
};
exports.user_delete = async (req, res, next) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200);
    res.send('User deleted Successfully');
  } catch (error) {
    res.json(error)
    next();
  }
};