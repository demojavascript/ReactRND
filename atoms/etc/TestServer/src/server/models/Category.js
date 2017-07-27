var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var categorySchema   = new Schema({
    title: String,
    desc: String,
    slug:String,
    created_at: { type: Date, default: Date.now },
	  updated_at: { type: Date, default: Date.now }
});
categorySchema.pre('save', function(next){
  //now = new Date();
  this.updated_at = new Date();
  next();
});
module.exports = mongoose.model('Category', categorySchema);
