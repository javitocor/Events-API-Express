var mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const Role = require('../models/role');

var Schema = mongoose.Schema;

var UserSchema = new Schema({
    username: {type: String, required: true, min:3, unique: true},
    firstname: {type: String, min:3},
    lastname: {type: String, min:3},
    password: {type: String, required: true, min: 5},
    dob: {type: Date},
    role: {type: Schema.ObjectId, ref: 'Role'},
    email: {type: String, unique: true},
});

UserSchema.pre('remove', function(next) {
  this.model('Ticket').deleteMany({ owner: this._id });
  next();
});

UserSchema.pre('save', async function(next) {
    const hash = await bcrypt.hash(this.password, 10);

    this.password = hash;
    
    const role = await Role.findOne({ name: 'Basic'});
    this.role = role._id;

    next();
  }
);

UserSchema.methods.isValidPassword = async function(password) {
  const user = this;
  const compare = await bcrypt.compare(password, user.password);

  return compare;
}


// Virtual for this User instance URL.
UserSchema
.virtual('url')
.get(function () {
  return '/users/'+this._id;
});

// Export model.
module.exports = mongoose.model('User', UserSchema);