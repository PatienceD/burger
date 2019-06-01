let express = require('express');

let router = express.Router();

let burger = require("../models/burger.js");

//index redirect
router.get("/", function (req, res) {
    res.redirect('/index');
});


//index page
router.get('/index', function(req, res){
    burger.selectAll(function(data){
        let theObj = { burgers: data};
        res.render('index', theObj);
    });
});


//make new burger
router.post('/burger/create', function(req, res){
    burger.insertOne(req.body.burger_name, function(){
        res.redirect('/index');
    });
});

//eat burger
router.post('/burger/eat/:id', function(req, res){
    burger.updateOne(req.params.id, function(){
        res.redirect('/index');
    });
});

module.exports = router;