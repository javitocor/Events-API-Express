const User = require('../models/user')

exports.checkIsAdminBasic = async (req, res, next) =>  {
  try {
    const user = await User.findById(req.user._id).populate('role').exec();
    if(req.user && (user.role.name == 'ADMIN_BASIC' || user.role.name == 'ADMIN_MANAGER' || user.role.name == 'SUPERADMIN')) {
      next()
    } else {
      next(new Error('Your role cannot perform this accion'))
    }
  } catch(error) {
    next(error)
  }
}

exports.checkIsAdminManager = async (req, res, next) =>  {
  try {
    const user = await User.findById(req.user._id).populate('role').exec();
    if(req.user && (user.role.name == 'ADMIN_MANAGER' || user.role.name == 'SUPERADMIN')) {
      next()
    } else {
      next(new Error('Your role cannot perform this accion'))
    }
  } catch(error) {
    next(error)
  }
}

exports.checkIsSuperadmin = async (req, res, next) =>  {
  try {
    const user = await User.findById(req.user._id).populate('role').exec();
    if(req.user && user.role.name == 'SUPERADMIN') {
      next()
    } else {
      next(new Error('Your role cannot perform this accion'))
    }
  } catch(error) {
    next(error)
  }  
}

