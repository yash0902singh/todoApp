var mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password"
});
con.connect(function (err) {
    if (err) throw err;
    console.log("Connected to the database!");
});
module.exports = con;