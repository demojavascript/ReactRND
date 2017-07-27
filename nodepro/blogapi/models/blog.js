var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var blogSchema   = new Schema({
    title: String,
    body: String,
    slug:String,
    created_at: { type: Date, default: Date.now },
	updated_at: { type: Date, default: Date.now }
});
blogSchema.pre('save', function(next){
  now = new Date();
  this.updated_at = now;
  next();
});
module.exports = mongoose.model('Blog', blogSchema);