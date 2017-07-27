module.exports = function(router){
  require('./Routes/User')(router);
  require('./Routes/Category')(router);
  require('./Routes/Post')(router);
}
