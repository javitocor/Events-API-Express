const path = require('path');
const dotenv = require('dotenv')
dotenv.config({ path: path.resolve(__dirname, '../.env') });
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
    password: 'password',
    email: 'example@example.com'
  }),
  new User({
    username: 'ADMIN_BASIC',
    password: 'password',
    email: 'example1@example.com'
  }),
  new User({
    username: 'ADMIN_MANAGER',
    password: 'password',
    email: 'example2@example.com'
  }),
  new User({
    username: 'SUPERADMIN',
    password: 'password',
    email: 'example3@example.com'
  }),
]

mongoose
  .connect(process.env.MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology: true})
  .catch(err => {
    console.log(err.stack);
    process.exit(1);
  })
  .then(() => {
    console.log("connected to db in development environment");
    roles[1].save();
    users[1].save();
    const basic = Role.findOne({name:'ADMIN_BASIC'}).exec();
    const first = User.findOneAndUpdate({username: 'ADMIN_BASIC'}, {role: basic._id});
    
  })
  .catch(err => {
    console.log(err.stack);
    process.exit(1);
})
  .then(() => {
    roles.map(async (p, index) => {
      await p.save((err, result) => {
        if (index === roles.length - 1) {
          console.log("Roles DONE!");
        }
      });
    })})
  .catch(err => {
      console.log(err.stack);
  }).then(() => {
    users.map(async (p, index) => {
      await p.save((err, result) => {
        if (index === users.length - 1) {
          console.log("Users DONE!");
        }
      });
    })})
    .catch(err => {
      console.log(err.stack);
  }).then(() => {
    const basic = Role.findOne({name:'ADMIN_BASIC'}).exec();
    const manager = Role.findOne({name:'ADMIN_MANAGER'}).exec();
    const superadmin = Role.findOne({name:'SUPERADMIN'}).exec();

    async function updateUsers() {
      const first = await User.findOneAndUpdate({username: 'ADMIN_BASIC'}, {role: basic._id}); 
      const second = await User.findOneAndUpdate({username: 'ADMIN_MANAGER'}, {role: manager._id});
      const third = await User.findOneAndUpdate({username: 'SUPERADMIN'}, {role: superadmin._id});
      first.save();
      second.save();
      third.save();
    }
    
    updateUsers();
  })
  .catch(err => {
    console.log(err.stack);
})
  .then(() => {
    mongoose.disconnect();
  }).catch(err => {
    console.log(err.stack);
    process.exit(1);
});





  