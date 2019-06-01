let connection = require("../config/connection.js");

var orm = {
    
    selectAll: function (callback) {
        connection.query('SELECT * FROM ??', function (err, result) {
            if (err) throw err;
            callback(result);
            console.log(result);
        });
    },

    insertOne: function (burger_name, callback) {
        connection.query('INSERT INTO ?? SET ?', {
            burger_name: burger_name,
            devoured: false,
        }, function (err, result) {
            if (err) throw err;
            callback(result);
        });

    },

    updateOne: function (burgerID, callback) {
        connection.query('UPDATE ?? SET ? WHERE ?', [{ devoured: true }, { id: burgerID }],
            function (err, result) {
                if (err) throw err;
                callback(result);
            });
    }
};


// Export the ORM object in module.exports.
module.exports = orm;
