var mongoose = require('mongoose');  
var UserSchema = new mongoose.Schema({  
  lastname: String,
  firstname: String,
  birthday: String, 
  Address: String, 
  email: String,
  password:  { type: String },
  role: Number,
  versionKey: false 
});
mongoose.model('User', UserSchema);

module.exports = mongoose.model('User');
