const passport = require('passport');
const jwt = require('jsonwebtoken');

exports.signup_post = (req, res) => {
  const showUser = {
    _id: req.user._id,
    username: req.user.username,
    email: req.user.email,
  };
  res.status(201).json({
    message: 'Signup successful',
    user: showUser
  });
};

exports.login_post = async (req, res, next) => {
  passport.authenticate('login', async (err, user, info) => {
      try {
        if (err || !user) {
          const error = new Error('An error occurred.');

          return next(error);
        }

        req.login(user, { session: false }, async (error) => {
            if (error) return next(error);

            const body = { _id: user._id, username: user.username };
            const token = jwt.sign({ user: body }, process.env.SECRETORKEY, {
              expiresIn: 631139040 // 20 years in seconds
            });

            return res.json({ token });
          }
        );
      } catch (error) {
        return next(error);
      }
    }
  )(req, res, next);
};
exports.logout_get = (req, res) => {
  req.logout();
  res.json({message: 'Logged out succesfully!'});
};