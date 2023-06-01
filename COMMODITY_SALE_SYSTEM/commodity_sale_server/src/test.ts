import { _connection_init, SQL, SQLSet } from "./mysql_connection";

const conn = _connection_init('arcaea')

conn.connect()

conn.query(SQL.SELECT([],['user']), (err, data) => {
    console.log(data);
})

conn.end()