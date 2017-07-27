var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var userSchema   = new Schema({
    name: String,
    email: String,
    password: String,
    created_at: { type: Date, default: Date.now },
	updated_at: { type: Date, default: Date.now }
});
userSchema.pre('save', function(next){
  now = new Date();
  this.updated_at = now;
  next();
});
module.exports = mongoose.model('User', userSchema);