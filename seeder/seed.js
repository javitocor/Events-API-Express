const User = require("../models/user");
const Role = require("../models/role");
const mongoose = require("mongoose");

const roles = [   
  new Role({
    name : 'Basic'
  }),
  new Role({
    name : 'ADMIN_BASIC'
  }),
  new Role({
    name : 'ADMIN_MANAGER'
  }),
  new Role({
    name : 'SUPERADMIN'
  }),
]

const users = [
  new User({
    username: 'Basic',
    password: '1234567890'
  }),
  new User({
    username: 'ADMIN_BASIC',
    password: '1234567890'
  }),
  new User({
    username: 'ADMIN_MANAGER',
    password: '1234567890'
  }),
  new User({
    username: 'SUPERADMIN',
    password: '1234567890'
  }),
]

mongoose
  .connect(process.env.MONGODB_URI, { useNewUrlParser: true })
  .catch(err => {
    console.log(err.stack);
    process.exit(1);
  })
  .then(() => {
    console.log("connected to db in development environment");
  });

roles.map(async (p, index) => {
  await p.save((err, result) => {
    if (index === roles.length - 1) {
      console.log("Roles DONE!");
    }
  });
});

users.map(async (p, index) => {
  await p.save((err, result) => {
    if (index === users.length - 1) {
      console.log("Users DONE!");
    }
  });
});

async function updateUsers() {
  await User.findOneAndUpdate({username: 'ADMIN_BASIC'}, {role: 'ADMIN_BASIC'}); 
  await User.findOneAndUpdate({username: 'ADMIN_MANAGER'}, {role: 'ADMIN_MANAGER'});
  await User.findOneAndUpdate({username: 'SUPERADMIN'}, {role: 'SUPERADMIN'});
}

updateUsers();
mongoose.disconnect();
  