const checkIsAdminBasic = (req, res, next) =>  {
  if(req.user && req.user.role.name == 'ADMIN_BASIC') {
    next()
  } else {
    next(new Error('Your role cannot perform this accion'))
  }
}

const checkIsAdminManager = (req, res, next) =>  {
  if(req.user && req.user.role.name == 'ADMIN_MANAGER') {
    next()
  } else {
    next(new Error('Your role cannot perform this accion'))
  }
}

const checkIsSuperadmin = (req, res, next) =>  {
  if(req.user && req.user.role.name == 'SUPERADMIN') {
    next()
  } else {
    next(new Error('Your role cannot perform this accion'))
  }
}






module.exports = {
  checkIsAdminBasic,
  checkIsAdminManager,
  checkIsSuperadmin,
};