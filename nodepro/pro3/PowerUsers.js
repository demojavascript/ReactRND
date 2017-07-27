var mongoose  = require ("mongoose");
var PowerUsers  = require ("./UserModelTemp");
var PUser = mongoose.model('PowerUsers', PowerUsers);
module.exports = PUser