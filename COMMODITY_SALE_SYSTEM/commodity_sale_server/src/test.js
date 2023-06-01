"use strict";
exports.__esModule = true;
var mysql_connection_1 = require("./mysql_connection");
var conn = (0, mysql_connection_1._connection_init)('arcaea');
conn.connect();
var a = [];
conn.query(mysql_connection_1.SQL.SELECT([], ['user']), function (err, data) {
    a.push(data);
    console.log(a);
});
conn.end();
