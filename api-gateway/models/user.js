/*
 Expected output:

 Matthew Howard
 Exercise 2.3
 10 April 2018
 */

 // stat program

 /**Fields username, password, and email
  */
 var mongoose = require ('mongoose');
 var userSchema = new mongoose.Schema ({
     username: String,
     password: String,
     email: String
 });

 module.exports = mongoose.model ('User', userSchema);
 /**
  Database queries
  */