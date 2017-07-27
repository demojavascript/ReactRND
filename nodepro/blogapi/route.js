var User       = require('./models/user');
var Blog       = require('./models/blog');
var validator  = require('validator');

function convertToSlug( str ) {
  str = str.replace(/[`~!@#$%^&*()_\-+=\[\]{};:'"\\|\/,.<>?\s]/g, ' ').toLowerCase();
  str = str.replace(/^\s+|\s+$/gm,'');
  str = str.replace(/\s+/g, '-');
  return str;
}

module.exports = function(router){
    router.use(function(req, res, next) {
        console.log('Something is happening.');
        next();
    });
    router.get('/', function(req, res) {
        res.json({ message: 'hooray! welcome to our api!' });   
    });	
    router.route('/post/:post_id')
        .get(function(req, res) {
            var response = {};
            Blog.findById(req.params.post_id, function(err, post) {
                if (err){
                    response = {status:0, msg:err};
                    res.json(response);
                }else{
                    response = {status:1, data:post};
                    res.json(response);
                }
            });
        })
        
    router.route('/postslug/:slug')
        .get(function(req, res) {
            var response = {};
            Blog.find({"slug":req.params.slug}, function(err, posts) {
                if (err){
                    response = {status:0, msg:err};
                    res.json(response);
                }else if(posts.length === 0){
                    response = {status:0, msg:"No Post Found"};
                    res.json(response);
                }else{
                    response = {status:1, data:posts[0]};
                    res.json(response);
                }
            });
        })    
    router.route('/post')
        .get(function(req, res) {
            Blog.find({}, function(err, posts) {
                if (err){
                    response = {status:0, msg:err};
                    res.json(response);
                }else if(posts.length === 0){
                    response = {status:0, msg:"No Post Found"};
                    res.json(response);
                }else{
                    response = {status:1, data:posts};
                    res.json(response);
                }
            });
        })
        .post(function(req, res) {
            var response = {};
            if(req.body.title === undefined){
                response = {status:0, msg:"title required"};
                res.json(response);
            }else if(req.body.title.trim().length < 20){
                response = {status:0, msg:"title must be atleast 20 char long"};
                res.json(response);
            }else if(req.body.desc === undefined){
                response = {status:0, msg:"desc required"};
                res.json(response);
            }else if( req.body.desc.trim().length < 100){
                response = {status:1, msg:"desc must be atleast 100 char long"};
                res.json(response);
            }else{
                var post = new Blog();
                post.title = req.body.title;
                post.body = req.body.desc;
                post.slug = convertToSlug(post.title);
                Blog.find({"slug":post.slug}, function(err, posts) {
                    if (err){
                        response = {status:0, msg:err};
                        res.json(response);
                    }else if(posts.length > 0){
                        response = {status:0, msg:"Post Title already exist."};
                        res.json(response);
                    }else{
                        post.save(function(err) {
                            if (err){
                                response = {status:0, msg:err};
                                res.json(response);
                            }else{
                                response = {status:1, msg:"Post created!"};
                                res.json(response);
                            }
                        });
                    }
                });
            }
        })
        .put(function(req, res) {
            var response = {};
            if(req.body._id === undefined){
                response = {status:0, msg:"_id required"};
                res.json(response);
            }else if(req.body.title === undefined){
                response = {status:0, msg:"title required"};
                res.json(response);
            }else if(req.body.title.trim().length < 20){
                response = {status:0, msg:"title must be atleast 20 char long"};
                res.json(response);
            }else if(req.body.desc === undefined){
                response = {status:0, msg:"desc required"};
                res.json(response);
            }else if( req.body.desc.trim().length < 100){
                response = {status:1, msg:"desc must be atleast 100 char long"};
                res.json(response);
            }else{
                Blog.find({"_id":req.body._id}, function(err, postt) {
                    if (err){
                        response = {status:0, msg:err};
                        res.json(response);
                    }else if(postt.length < 1){
                        response = {status:0, msg:"Post doesn't exist."};
                        res.json(response);
                    }else{
                        Blog.find({"slug":convertToSlug(req.body.title)}, function(err, postarr) {
                            if(err){
                                response = {status:0, msg:err};
                                res.json(response);
                            }else if(postarr.length > 0 && postarr[0]._id != req.body._id){
                                response = {status:0, msg:"Title already exist "};
                                res.json(response);       
                            }else{
                                var post = postt[0];
                                post.title = req.body.title;
                                post.body = req.body.desc;
                                post.slug = convertToSlug(req.body.title);
                                post.save(function(err) {
                                    if (err){
                                        response = {status:0, msg:err};
                                        res.json(response);
                                    }else{
                                        response = {status:1, msg:"Post updated!"};
                                        res.json(response);
                                    }
                                });
                            }
                        });
                    }
                });
            }
        })
        .delete(function(req, res) {
            var response = {};
            Blog.remove({_id: req.body._id}, function(err, blog) {
                if (err){
                    response = {status:0, msg:err};
                    res.json(response);
                }else{
                    response = {status:1, msg:"Post deleted.."};
                    res.json(response);
                }
            });
        });


    router.route('/user')
        .post(function(req, res) {
            var response = {};
            if(req.body.email === undefined){
                response = {status:0, msg:"email required"};
                res.json(response);
            }else if(!validator.isEmail(req.body.email)){
                response = {status:0, msg:"incorrect email"};
                res.json(response);
            }else if(req.body.password === undefined){
                response = {status:0, msg:"password required"};
                res.json(response);
            }else if( (req.body.password.trim().length < 6) || req.body.password.trim().length > 12){
                response = {status:0, msg:"password must be between 6 to 12 char long"};
                res.json(response);
            }else{
                User.find({"email":req.body.email, "password":req.body.password}, function(err, users) {
                    if (err){
                        response = {status:0, msg:err};
                        res.json(response);
                    }else if(users.length === 0){
                        response = {status:0, msg:"Incorrect credentails."};
                        res.json(response);
                    }else{
                        response = {status:1, data:users[0]};
                        res.json(response);
                    }
                });
            }
        })
    router.route('/users')
        .post(function(req, res) {
            var response = {};
            if(req.body.email === undefined){
                response = {status:0, msg:"email required"};
                res.json(response);
            }else if(!validator.isEmail(req.body.email)){
                response = {status:0, msg:"incorrect email"};
                res.json(response);
            }else if(req.body.password === undefined){
                response = {status:0, msg:"password required"};
                res.json(response);
            }else if( (req.body.password.trim().length < 6) || req.body.password.trim().length > 12){
                response = {status:0, msg:"password must be between 6 to 12 char long"};
                res.json(response);
            }else if(req.body.name === undefined){
                response = {status:0, msg:"name required"};
                res.json(response);
            }else if(req.body.name.trim().length<3){
                response = {status:0, msg:"name must be atleast 3 char long"};
                res.json(response);
            }else{
                User.find({"email":req.body.email}, function(err, users) {
                    if (err){
                        response = {status:0, msg:err};
                        res.json(response);
                    }else{
                        if(users.length > 0){
                           response = {status:0, msg:"Email ID already registered."};
                           res.json(response); 
                        }else{
                            var user = new User();
                            user.name = req.body.name;
                            user.email = req.body.email;
                            user.password = req.body.password;
                            user.save(function(err) {
                                if (err){
                                    response = {status:0, msg:err};
                                    res.json(response);
                                }else{
                                    response = {status:1, msg:"User created!"};
                                    res.json(response);
                                }
                            });
                        }
                    }
                });
            }
        })    
}