var mongoose = require('mongoose');  

var ClassSchema = new mongoose.Schema({
	entitled: String,
    author: String,
    description: String,
    mode: String, 
    theme: String
});
mongoose.model('Class', ClassSchema);

module.exports = mongoose.model('Class');
