import Slug from '.././Utils/Slug';
import passwordValidation from '.././Util'
var Post      = require('.././models/Post');
var ObjectId  = require('mongodb').ObjectID;

module.exports = function(router){

  router.route('/post/:id')
      .get(function(req, res){
          var status  = 0;
          var msg     = "";
          var data;
          Post.find({"_id":ObjectId(req.params.id)}, function(err, posts){
              if(err){
                  res.json({"status":status, "msg":err});
              }else if(posts.length === 0){
                msg = "No Post Found";
                res.json({"status":1, "msg":msg});
              }else {
                res.json({"status":1, "data":posts[0]});
              }
          });
      })
      .put(function(req, res){
          var status  = 0;
          var msg     = "";
          var data;
          if(req.params.id === undefined){
              msg = "Post id can not be blank";
              res.json({"status":1, "msg":msg});
          }else{
              Post.find({"_id":ObjectId(req.params.id)}, function(err, posts){
                  if(err){
                      res.json({"status":1, "msg":err});
                  }else if(posts.length === 0){
                    msg = "Post doesn't exist.";
                    res.json({"status":1, "msg":msg});
                  }else{
                      Post.find({"slug":Slug(req.body.title)}, function(errin1, postdata){
                          if(errin1){
                              res.json({"status":status, "msg":errin1});
                          }else if(postdata.length > 0 && postdata[0]._id != req.params.id){
                              msg       = "Post already exist."
                              res.json({"status":status, "msg":msg});
                          }else{
                              if(req.body.title === undefined){
                                msg       = "Please provide Post Name."
                                res.json({"status":status, "msg":msg});
                              }else if(req.body.title.trim().length < 10){
                                msg       = "Post title must be atleast 10 char long"
                                res.json({"status":status, "msg":msg});
                              }else if(req.body.desc === undefined){
                                msg       = "Please provide Post Desc."
                                res.json({"status":status, "msg":msg});
                              }else if(req.body.catid === undefined || req.body.catname === undefined){
                                msg       = "Please provide Post Category."
                                res.json({"status":status, "msg":msg});
                              }else if(req.body.id === undefined || req.body.id.length < 1){
                                msg       = "Please provide Post Admin Id."
                                res.json({"status":status, "msg":msg});
                              }else if(req.body.name === undefined || req.body.name.length < 1){
                                msg       = "Please provide Post Admin Name."
                                res.json({"status":status, "msg":msg});
                              }else if(req.body.email === undefined || req.body.email.length < 1){
                                msg       = "Please provide Post Admin Email."
                                res.json({"status":status, "msg":msg});
                              }else{
                                  var post = posts[0];
                                  post.title = req.body.title;
                                  post.desc = req.body.desc;
                                  post.slug = Slug(req.body.title);
                                  post.catid = req.body.catid;
                                  post.catname = req.body.catname;
                                  post.user = {_id:req.body.id, name:req.body.name, email:req.body.email};
                                  post.save(function(errin){
                                    if(errin){
                                      res.json({"status":status, "msg":errin});
                                    }else{
                                      msg = "Post Updated.";
                                      res.json({"status":1, "msg":msg});
                                    }
                                  });
                              }
                          }
                      })
                  }
              });
          }
      })
      .delete(function(req, res){
          var status  = 0;
          var msg     = "";
          var data;
          Post.find({"_id":req.params.id}, function(err, posts){
              if(err){
                  res.json({"status":status, "msg":err});
              }else if(posts.length === 0){
                  msg = "Post doesn't exist."
                  res.json({"status":status, "msg":msg});
              }else{
                  Post.remove({_id: ObjectId(req.params.id)}, function(errin, created_at) {
                      if(errin){
                          res.json({"status":status, "msg":errin});
                      }else{
                        msg = "Post removed."
                        res.json({"status":1, "msg":msg});
                      }
                  });
              }
          });
      });

  router.route('/post')
      .get(function(req, res){
          var status  = 0;
          var msg     = "";
          var data;
          Post.find({}, function(err, posts){
              if(err){
                  res.json({"status":status, "msg":err});
              }else if(posts.length === 0){
                msg = "No Post Found";
                res.json({"status":1, "msg":msg});
              }else {
                res.json({"status":1, "data":posts});
              }
          });
      })
      .post(function(req, res){
          var status  = 0;
          var msg     = "";
          var data;

          if(req.body.title === undefined){
            msg       = "Please provide Post Name."
            res.json({"status":status, "msg":msg});
          }else if(req.body.title.trim().length < 10){
            msg       = "Post title must be atleast 10 char long"
            res.json({"status":status, "msg":msg});
          }else if(req.body.desc === undefined){
            msg       = "Please provide Post Desc."
            res.json({"status":status, "msg":msg});
          }else if(req.body.catid === undefined || req.body.catid.length == 0  ||req.body.catid == "-1" || req.body.catname === undefined){
            msg       = "Please provide Post Category."
            res.json({"status":status, "msg":msg});
          }else if(req.body.id === undefined || req.body.id.length < 1){
            msg       = "Please provide Post Admin Id."
            res.json({"status":status, "msg":msg});
          }else if(req.body.name === undefined || req.body.name.length < 1){
            msg       = "Please provide Post Admin Name."
            res.json({"status":status, "msg":msg});
          }else if(req.body.email === undefined || req.body.email.length < 1){
            msg       = "Please provide Post Admin Email."
            res.json({"status":status, "msg":msg});
          }else{
            Post.find({"slug":Slug(req.body.title)}, function(err, posts){
                if(err){
                  res.json({"status":status, "msg":err});
                }else if(posts.length > 0){
                  msg = "Post with same title already exist";
                  res.json({"status":status, "msg":msg});
                }else{
                  var post = new Post();
                  post.title = req.body.title;
                  post.desc = req.body.desc;
                  post.slug = Slug(req.body.title);
                  post.catid = req.body.catid;
                  post.catname = req.body.catname;
                  post.user = {_id:req.body.id, name:req.body.name, email:req.body.email};
                  post.save(function(errin){
                    if(errin){
                      res.json({"status":status, "msg":errin});
                    }else{
                      msg = "Post created.";
                      res.json({"status":1, "msg":msg});
                    }
                  });
                }
            });
          }
      });
  router.route('/postbycat/:catid')
      .get(function(req, res){
          var status  = 0;
          var msg     = "";
          var data;
          Post.find({"catid":ObjectId(req.params.catid)}, function(err, posts){
              if(err){
                  res.json({"status":status, "msg":err});
              }else if(posts.length === 0){
                msg = "No Post Found";
                res.json({"status":1, "msg":posts});
              }else {
                res.json({"status":1, "data":posts});
              }
          });
      });

  router.route('/postbyslug/:slug')
      .get(function(req, res){
          var status  = 0;
          var msg     = "";
          var data;
          Post.find({"slug":req.params.slug}, function(err, posts){
            if(err){
                res.json({"status":status, "msg":err});
            }else if(posts.length === 0){
              msg = "No Post Found";
              res.json({"status":1, "msg":msg});
            }else {
              res.json({"status":1, "data":posts[0]});
            }
          });
      });

    router.route('/postbyuser/:id')
        .get(function(req, res){
            var status  = 0;
            var msg     = "";
            var data;
            Post.find({"user._id":req.params.id}, function(err, posts){
                if(err){
                    res.json({"status":status, "msg":err});
                }else if(posts.length === 0){
                  msg = "No Post Found";
                  res.json({"status":1, "msg":msg});
                }else {
                  res.json({"status":1, "data":posts});
                }
            });
        })

}
