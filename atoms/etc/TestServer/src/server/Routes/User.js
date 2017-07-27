
import validator from 'email-validator';
import passwordValidation from '.././Util'
var User       = require('.././models/User');
var Post       = require('.././models/Post');

module.exports = function(router){
  router.route('/login')
    .post(function(req, res) {
          var status = 0;
          var msg    = "";
          var data;
          if(req.body.email === undefined){
            msg    = "Please provide user email."
            res.json({"status":status, "msg":msg, "data":data});
          }else if(!validator.validate(req.body.email)){
            msg    = "Please provide correct email."
            res.json({"status":status, "msg":msg, "data":data});
          }else if(req.body.password === undefined){
            msg    = "Please provide user password."
            res.json({"status":status, "msg":msg, "data":data});
          }else if(passwordValidation(req.body.password) === null){
            msg    = "Please provide password between 8 to 12 alphanumeric."
            res.json({"status":status, "msg":msg, "data":data});
          }else{
            User.find({"email":req.body.email, "password":req.body.password},function(err, users) {
                if (err){
                    msg = err;
                    res.json({"status":status, "msg":msg, "data":data});
                }else{
                    if(users.length < 1){
                      status = 0;
                      msg    = "User not registered.";
                    }else {
                      status = 1;
                      data   = users[0];
                    }
                    res.json({"status":status, "msg":msg, "data":data});
                }
            });
          }
    })

  router.route('/user')
    .get(function(req, res) {
        User.find({}, function(err, users) {
            if(err){
                res.json({"status":0, "msg":err});
            }else if(users === null || users.length == 0){
                res.json({"status":0, "msg":"user does not exist."});
            }else{
                res.json({"status":1, "data": users});
            }
        });
    })

    .post(function(req, res) {
        var status = 0;
        var msg    = "";
        var data;
        if(req.body.email === undefined){
          msg    = "Please provide user email."
          res.json({"status":status, "msg":msg, "data":data});
        }else if(!validator.validate(req.body.email)){
          msg    = "Please provide correct email."
          res.json({"status":status, "msg":msg, "data":data});
        }else if(req.body.password === undefined){
          msg    = "Please provide user password."
          res.json({"status":status, "msg":msg, "data":data});
        }else if(passwordValidation(req.body.password) === null){
          msg    = "Please provide password between 8 to 12 alphanumeric."
          res.json({"status":status, "msg":msg, "data":data});
        }else if(req.body.name === undefined){
          msg    = "Please provide user name."
          res.json({"status":status, "msg":msg, "data":data});
        }else if(req.body.name.length < 5){
          msg    = "Name can not be less than 5 char."
          res.json({"status":status, "msg":msg, "data":data});
        }else if(req.body.role === undefined || req.body.role.length < 1){
          msg    = "Please provide user role"
          res.json({"status":status, "msg":msg, "data":data});
        }else{
          User.find({"email":req.body.email, "password":req.body.password},function(err, users) {
              if (err){
                msg = err;
                res.json({"status":status, "msg":msg, "data":data});
              }else{
                if(users.length > 0){
                  status = 0;
                  msg    = "Email already exist.";
                  res.json({"status":status, "msg":msg, "data":data});
                }else {
                  var user = new User();
                  user.name = req.body.name;
                  user.email = req.body.email;
                  user.password = req.body.password;
                  user.role = req.body.role;
                  user.save(function(err) {
                    if (err){
                      msg = err;
                      status = 0;
                      res.json({"status":status, "msg":msg, "data":data});
                      return;
                    }else{
                      status = 1;
                      msg    = "user registered.";
                      res.json({"status":status, "msg":msg, "data":data});
                      return;
                    }
                  });
                }
              }
          });
        }
      })

    router.route('/user/:id')
      .get(function(req, res) {
          User.findById(req.params.id, function(err, user) {
              if(err){
                  res.json({"status":0, "msg":err});
              }else if(user === null){
                  res.json({"status":0, "msg":"user does not exist."});
              }else{
                  res.json({"status":1, "data": user });
              }
          });
      })
      .put(function(req, res) {
          User.findById(req.params.id, function(err_, user) {
              var status = 0;
              var msg    = "";
              var data;
              if (err_){
                res.json({"status":0, "msg":err_});
              }else{
                if(user === null){
                  res.json({"status":0, "msg":"user does not exist."});
                }else{
                  if(req.body.email === undefined){
                    msg    = "Please provide user email."
                    res.json({"status":status, "msg":msg, "data":data});
                  }else if(!validator.validate(req.body.email)){
                    msg    = "Please provide correct email."
                    res.json({"status":status, "msg":msg, "data":data});
                  }else if(req.body.password === undefined){
                    msg    = "Please provide user password."
                    res.json({"status":status, "msg":msg, "data":data});
                  }else if(passwordValidation(req.body.password) === null){
                    msg    = "Please provide password between 8 to 12 alphanumeric."
                    res.json({"status":status, "msg":msg, "data":data});
                  }else if(req.body.name === undefined){
                    msg    = "Please provide user name."
                    res.json({"status":status, "msg":msg, "data":data});
                  }else if(req.body.name.length < 5){
                    msg    = "Name can not be less than 5 char."
                    res.json({"status":status, "msg":msg, "data":data});
                  }else if(req.body.role === undefined || req.body.role.length < 1){
                    msg    = "Please provide user role"
                    res.json({"status":status, "msg":msg, "data":data});
                  }else{
                    user.name     = req.body.name;
                    user.email    = req.body.email;
                    user.password = req.body.password;
                    user.role = req.body.role;
                    user.save(function(err) {
                        if (err){
                          res.json({"status":0, "msg":err});
                        }else{
                          Post.find({"user._id":req.params.id}, function(err, posts){
                            posts.forEach(function(obj) {
                              //Post.update({"catid": ObjectId(obj.catid)}, {$set: {"catname": category.title}});
                              obj.user.name = req.body.name;
                              obj.save(function(err2){

                              });
                            });
                          });
                          res.json({"status":1, "msg": 'User updated!' });

                        }
                    });
                  }
                }
              }
          });
      })
      .delete(function(req, res) {
          User.findById(req.params.id, function(err_, user) {
            if (err_){
              res.json({"status":0, "msg":err_});
            }else{
              if(user === null){
                res.json({"status":0, "msg":"user does not exist."});
              }else{
                User.remove({_id:req.params.userid}, function(err, nuser){
                    if(err){
                      res.json({"status":0, "msg":err});
                    }else{
                      res.json({"status":1, "msg":"user deleted."});
                    }
                });
              }
            }
          });
      })

}
