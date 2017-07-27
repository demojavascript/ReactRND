var mongoose  = require ("mongoose");
var PowerUsers = new mongoose.Schema({
  name: String,
  age: String
});
module.exports = PowerUsers