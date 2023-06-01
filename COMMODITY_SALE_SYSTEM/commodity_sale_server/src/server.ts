import { Request, Application, Express, Response } from 'express';
import express = require('express');
import * as http from 'http';
import * as path from 'path';

import { toStringWithTypeSymbol, SQL, SQLSet, _connection_init, } from './mysql_connection'
const conn = _connection_init('commodity_system');

const userArr = []

const app: Application = express();

const server = http.createServer(app);

server.listen(5000, () => {
    console.log(`Server on\nPort: 5000`);
});

app.use(express.static(path.resolve(__dirname, './dist')));

app.get('/', (req: Request, res: Response) => {
    res.sendFile(path.resolve(__dirname, './dist/') + '/index.html');
});

app.get('/login', (req: Request, res: Response) => {
    let sql = SQL.SELECT(['user_idx', 'user_name'], ['user'], `user_name = '${req.query.username}' and user_password = '${req.query.password}'`)
    conn.query(sql, (err, data) => {
        if (err) console.log(err);
        else {

            console.log(data);
            if (data.length == 0) {
                res.send({ code: 0, msg: '用户名或密码错误' })
            } else res.send({ code: 1, msg: '登录成功', user: { username: data[0].user_name, userid: data[0].user_idx } })
        }
    })
});

app.get('/registered', (req: Request, res: Response) => {
    let sql = SQL.SELECT(['user_idx'], ['user'], `user_name = '${req.query.username}'`)
    conn.query(sql, (err, data) => {
        if (err) console.log(err);
        else {
            console.log(data);
            if (data.length == 0) {
                let insert = SQL.INSERT('user', [`user_${Date.now().toString()}`, req.query.username, req.query.password])
                conn.query(insert, () => {
                    res.send({ code: 1, msg: '注册成功' })
                })
            } else res.send({ code: 0, msg: '已有用户' })
        }
    })

});

app.get('/random', (req: Request, res: Response) => {
    res.send({ result: Math.random() })
})

app.get('/add', (req: Request, res: Response) => {
    res.send({ result: 'added!' + Math.random() })
})

app.get('/update/userinfo', (req: Request, res: Response) => {
    let sql = SQL.UPDATE('user', [new SQLSet('user_name', req.query.username), new SQLSet('user_password', req.query.password)], `user_idx='${req.query.userid}'`)
    conn.query(sql, (err, data) => {
        if (err) console.log(err);
        else {
            console.log(data);
            if (data.affectedRows > 0) {
                res.send({ code: 1, msg: 'success', user: {username: req.query.username}})
            } else res.send({ code: 0, msg: 'error' })
        }
    })
})