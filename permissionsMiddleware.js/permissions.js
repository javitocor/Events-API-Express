exports.checkIsAdminBasic = (req, res, next) =>  {
  if(req.user && req.user.role.name == 'ADMIN_BASIC') {
    next()
  } else {
    next(new Error('Your role cannot perform this accion'))
  }
}

exports.checkIsAdminManager = (req, res, next) =>  {
  if(req.user && req.user.role.name == 'ADMIN_MANAGER') {
    next()
  } else {
    next(new Error('Your role cannot perform this accion'))
  }
}

exports.checkIsSuperadmin = (req, res, next) =>  {
  if(req.user && req.user.role.name == 'SUPERADMIN') {
    next()
  } else {
    next(new Error('Your role cannot perform this accion'))
  }
}
