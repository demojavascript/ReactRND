import Slug from '.././Utils/Slug';
import validator from 'email-validator';
import passwordValidation from '.././Util';
var ObjectId  = require('mongodb').ObjectID;
var Category      = require('.././models/Category');
var Post        = require('.././models/Post');

module.exports = function(router){

  router.route('/category')
    .get(function(req, res) {
        var status  = 0;
        var msg     = "";
        var data;
        Category.find({}, function(err, categories) {
            if (err){
              res.json({"status":status, "msg":err});
            }else if(categories.length === 0){
              msg        = "No Category Found";
              res.json({"status":1, "msg":msg});
            }else{
              res.json({"status":1, "msg":msg, "data":categories});
            }
        });
    })

    .post(function(req, res) {
        var status  = 0;
        var msg     = "";
        var data;

        if(req.body.title === undefined){
          msg       = "Please provide category Name."
          res.json({"status":status, "msg":msg});
        }else if(req.body.title.trim().length < 3 || req.body.title.trim().length > 100){
          msg       = "Category name must me between 3 to 100 char long"
          res.json({"status":status, "msg":msg});
        }else if(req.body.desc === undefined){
          msg       = "Please provide category Desc."
          res.json({"status":status, "msg":msg});
        }else{
          Category.find({"slug":Slug(req.body.title)}, function(err, cats){
            if(err){
              res.json({"status":status, "msg":err});
            }else if(cats.length > 0){
              msg   = "Category Name already exist."
              res.json({"status":status, "msg":msg});
            }else{
              var category = new Category();
              category.title = req.body.title;
              category.desc = req.body.desc;
              category.slug = Slug(req.body.title);
              category.save(function(errin){
                if(errin){
                  res.json({"status":status, "msg":err});
                }else{
                  msg   = "Category Created."
                  res.json({"status":1, "msg":msg});
                }
              });
            }
          });
        }
    });

  router.route('/category/:catid')
    .get(function(req, res) {
        var status  = 0;
        var msg     = "";
        var data;
        Category.find({"_id":req.params.catid.trim()}, function(err, categories) {
            if (err){
              res.json({"status":status, "msg":err});
            }else if(categories.length === 0){
              msg        = "No Category Found";
              res.json({"status":status, "msg":msg});
            }else{
              res.json({"status":status, "msg":msg, "data":categories[0]});
            }
        });
      })

    .put(function(req, res) {
        var status  = 0;
        var msg     = "";
        var data;
        if(req.params.catid === undefined || req.params.catid.trim().length < 1){
          msg       = "Please provide category Id."
          res.json({"status":status, "msg":msg});
        }else{
          Category.find({"_id":ObjectId(req.params.catid)}, function(err, cats){
              if(err){
                res.json({"status":status, "msg":err});
              }else if(cats.length === 0){
                msg       = "Category doesn't exist."
                res.json({"status":status, "msg":msg});
              }else{
                  Category.find({"slug":Slug(req.body.title)}, function(err, catdata){
                      if(err){
                          res.json({"status":status, "msg":err});
                      }else if(catdata.length > 0 && catdata[0]._id != req.params.catid){
                          msg = "Category name already exist.";
                          res.json({"status":status, "msg":msg});
                      }else{
                          if(req.body.title === undefined){
                            msg       = "Please provide category Name."
                            res.json({"status":status, "msg":msg});
                          }else if(req.body.title.trim().length < 3 || req.body.title.trim().length > 100){
                            msg       = "Category name must me between 3 to 100 char long"
                            res.json({"status":status, "msg":msg});
                          }else if(req.body.desc === undefined){
                            msg       = "Please provide category Desc."
                            res.json({"status":status, "msg":msg});
                          }else{
                            var category = cats[0];
                            category.title = req.body.title;
                            category.desc  = req.body.desc;
                            category.slug  = Slug(req.body.title);
                            category.save(function(errin){
                                if(errin){
                                  res.json({"status":status, "msg":errin});
                                }else{
                                  msg = "Category Updated."

                                  Post.find({"catid":ObjectId(category._id)}, function(err, posts){
                                    posts.forEach(function(obj) {
                                      //Post.update({"catid": ObjectId(obj.catid)}, {$set: {"catname": category.title}});
                                      obj.catname = category.title;
                                      obj.save(function(err2){

                                      });
                                    });
                                  });
                                  res.json({"status":1, "msg":msg});
                                }
                            });
                          }
                      }
                  });
              }
          })
        }
    })

    .delete(function(req, res) {
        var status  = 0;
        var msg     = "";
        var data;
        Category.find({"_id":req.params.catid}, function(err, cats){
            if(err){
                res.json({"status":status, "msg":err});
            }else if(cats.length === 0){
                msg = "Category doesn't exist."
                res.json({"status":status, "msg":msg});
            }else{
                Category.remove({_id: req.params.catid}, function(errin, created_at) {
                    if(errin){
                        res.json({"status":status, "msg":errin});
                    }else{
                      msg = "Category removed."
                      res.json({"status":1, "msg":msg});
                    }
                });
            }
        });
    });
}
