var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET Hello World page. */
// router.get('/helloworld', function(req, res) {
//     res.render('helloworld', { title: 'Hello, World!' });
// });

// initial thought on chatroom route
router.get('/chatroom', function(req, res) {
    // var db = req.db;
    // var collection = db.get('usercollection');
    collection.find({},{},function(e,docs){
        res.render('chatroom', {
            // "userlist" : docs
        });
    });
});

module.exports = router;
