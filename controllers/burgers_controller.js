let express = require('express');

let router = express.Router();

let burger = require("../models/burger.js");

router.get("/", function (req, res) {
    burger.all(function (data) {
        let thisObj = {
            burger: data
        };
        console.log(thisObj);
        res.render("index", thisObj);
    });
});

router.post("/api/burgers", function (req, res) {
    burger.create([
        'name', 'devoured'
    ], [
            req.body.name, req.body.devoured
        ], function (result) {
            res.json({ id: result.insertId });
        });
});