const User = require('../models/user');

exports.user_list = async (req, res, next) => {
  try {
    const users = await User.find({}).select("-__v -role");
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
  try {
    await User.findByIdAndUpdate(req.params.id, { $set: req.body });
    res.status(200);
    res.json({message:'User updated successfully'});
  } catch (error) {
    res.json(error)
    next();
  }
};
exports.user_delete = async (req, res, next) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200);
    res.json({message:'User deleted successfully'});
  } catch (error) {
    res.json(error)
    next();
  }
};