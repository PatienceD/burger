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
router.post('/api/burgers', function(req, res){
    burger.insertOne([
        "burger_name"
    ], [
        req.body.burger_name
    ], function(res){
        res.json({ id: res.insertId });
    });
});

//eat burger
router.put('/api/burgers/:id', function(req, res){
    let burgerId = "id = " + req.params.id;
    console.log("burger status changed for ", burgerId);

    burger.updateOne({
        //force devoured = true
        devoured: 1
    }, burgerId, function(res){
        if (res.changedRows === 0){
            return res.status(404).end();
        }else {
            res.status(200).end();
        }
    });
});

module.exports = router;