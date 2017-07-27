var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var postSchema   = new Schema({
    title: String,
    desc: String,
    slug:String,
    catid:String,
    catname:String,
    user:{
        _id: String,
      email: String,
       name: String
    },
    created_at: { type: Date, default: Date.now },
	  updated_at: { type: Date, default: Date.now }
});
postSchema.pre('save', function(next){
  this.updated_at = new Date();
  next();
});
module.exports = mongoose.model('Post', postSchema);
