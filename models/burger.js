let orm = require("../config/orm.js");

let burger = {
    selectAll: function(callback){
        orm.selectAll("burgers", function(res){
            callback(res);
        });
    },
    insertOne: function(burger_name, callback){
        orm.insertOne("burgers", burger_name, function(res){
            callback(res);
        });
    },
    updateOne: function(burger_id, callback){
        orm.updateOne("burgers", burger_id, function(res){
            callback(res);
        });
    }
};

module.exports = burger;