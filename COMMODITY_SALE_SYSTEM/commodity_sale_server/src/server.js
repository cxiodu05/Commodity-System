"use strict";
exports.__esModule = true;
var express = require("express");
var http = require("http");
var path = require("path");
var mysql_connection_1 = require("./mysql_connection");
var conn = (0, mysql_connection_1._connection_init)('commodity_system');
var userArr = [];
var app = express();
var server = http.createServer(app);
server.listen(5000, function () {
    console.log("Server on\nPort: 5000");
});
app.use(express.static(path.resolve(__dirname, './dist')));
app.get('/', function (req, res) {
    res.sendFile(path.resolve(__dirname, './dist/') + '/index.html');
});
app.get('/login', function (req, res) {
    var sql = mysql_connection_1.SQL.SELECT(['user_idx', 'user_name'], ['user'], "user_name = '".concat(req.query.username, "' and user_password = '").concat(req.query.password, "'"));
    conn.query(sql, function (err, data) {
        if (err)
            console.log(err);
        else {
            console.log(data);
            if (data.length == 0) {
                res.send({ code: 0, msg: '用户名或密码错误' });
            }
            else
                res.send({ code: 1, msg: '登录成功', user: { username: data[0].user_name, userid: data[0].user_idx } });
        }
    });
});
app.get('/registered', function (req, res) {
    var sql = mysql_connection_1.SQL.SELECT(['user_idx'], ['user'], "user_name = '".concat(req.query.username, "'"));
    conn.query(sql, function (err, data) {
        if (err)
            console.log(err);
        else {
            console.log(data);
            if (data.length == 0) {
                var insert = mysql_connection_1.SQL.INSERT('user', ["user_".concat(Date.now().toString()), req.query.username, req.query.password]);
                conn.query(insert, function () {
                    res.send({ code: 1, msg: '注册成功' });
                });
            }
            else
                res.send({ code: 0, msg: '已有用户' });
        }
    });
});
app.get('/random', function (req, res) {
    res.send({ result: Math.random() });
});
app.get('/add', function (req, res) {
    res.send({ result: 'added!' + Math.random() });
});
app.get('/update/userinfo', function (req, res) {
    var sql = mysql_connection_1.SQL.UPDATE('user', [new mysql_connection_1.SQLSet('user_name', req.query.username), new mysql_connection_1.SQLSet('user_password', req.query.password)], "user_idx='".concat(req.query.userid, "'"));
    conn.query(sql, function (err, data) {
        if (err)
            console.log(err);
        else {
            console.log(data);
            if (data.affectedRows > 0) {
                res.send({ code: 1, msg: 'success', user: { username: req.query.username } });
            }
            else
                res.send({ code: 0, msg: 'error' });
        }
    });
});
