var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var CardSchema   = new Schema({
    title: String
});

module.exports = mongoose.model('Card', CardSchema);