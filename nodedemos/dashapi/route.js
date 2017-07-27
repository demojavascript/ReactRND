var Card       = require('./models/cards');
var User       = require('./models/users');
module.exports = function(router){
    router.use(function(req, res, next) {
        console.log('Something is happening.');
        next();
    });
    router.get('/', function(req, res) {
        res.json({ message: 'hooray! welcome to our api!' });   
    });	
    
    router.route('/user')
        .post(function(req, res) {
            var user = new User();
            var response = {};
            if(req.body.email === undefined){
                response = {status:0, msg:"email required"};
            }else{
                User.find({"email":req.body.email, "password":req.body.password}, function(err, users) {
                    if (err)
                        res.send(err);

                    res.json(users);
                });
            }
            //user.email = req.body.email;
            //user.password = req.body.password;
            res.json(response);
        })

    router.route('/users')
        .get(function(req, res) {
            User.find(function(err, users) {
                if (err)
                    res.send(err);

                res.json(users);
            });
        })
        .post(function(req, res) {
            var user = new User();
            user.name = req.body.name;
            user.email = req.body.email;
            user.password = req.body.password;
            user.save(function(err) {
                if (err)
                    res.send(err);

                res.json({ message: 'User created!' }); 
            });
        })

    router.route('/cards')
    	.get(function(req, res) {
            Card.find(function(err, cards) {
                if (err)
                    res.send(err);

                res.json(cards);
            });
        })
        
        .post(function(req, res) {
            var card = new Card();
            card.title = req.body.title;
            card.save(function(err) {
                if (err)
                    res.send(err);

                //res.json({ message: 'Card created!' });
                Card.find(function(err, cards) {
                    if (err)
                        res.send(err);

                    res.json(cards);
                }); 
            });
        })


    router.route('/cards/:card_id')    
        .get(function(req, res) {
            Card.findById(req.params.card_id, function(err, card) {
                if (err)
                    res.send(err);
                res.json(card);
            });
        })
        .delete(function(req, res) {
            Card.remove({
                _id: req.params.card_id
            }, function(err, bear) {
                if (err)
                    res.send(err);

                //res.json({ message: 'Successfully deleted' });
                Card.find(function(err, cards) {
                    if (err)
                        res.send(err);

                    res.json(cards);
                });
            });
        })
        .put(function(req, res) {
            Card.findById(req.params.card_id, function(err, bear) {

                if (err)
                    res.send(err);

                card.title = req.body.title; 
                card.save(function(err) {
                    if (err)
                        res.send(err);

                    res.json({ message: 'Bear updated!' });
                });

            });
        })

}