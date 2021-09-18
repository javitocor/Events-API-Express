const passport = require('passport');
const jwt = require('jsonwebtoken');

exports.signup_post = passport.authenticate('signup', { session: false }),
async (req, res, next) => {
  res.json({
    message: 'Signup successful',
    user: req.user
  });
}
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
            const token = jwt.sign({ user: body }, process.env.SECRETORKEY);

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
  res.send();
};