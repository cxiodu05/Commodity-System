"use strict";
exports.__esModule = true;
exports.SQL = exports._connection_init = exports.SQLSet = exports.toStringWithTypeSymbol = void 0;
var mysql = require("mysql");
function toStringWithTypeSymbol(arr) {
    var str = '';
    for (var i = 0; i < arr.length - 1; i++) {
        if (typeof arr[i] == "string") {
            str += "'".concat(arr[i].toString(), "',");
        }
        else
            str += "".concat(arr[i].toString(), ",");
    }
    if (typeof arr[arr.length - 1] == "string") {
        str += "'".concat(arr[arr.length - 1].toString(), "'");
    }
    else
        str += "".concat(arr[arr.length - 1].toString());
    return str;
}
exports.toStringWithTypeSymbol = toStringWithTypeSymbol;
var SQLSet = /** @class */ (function () {
    function SQLSet(property, value) {
        this.property = property;
        this.value = value;
    }
    SQLSet.prototype.toString = function () {
        if (typeof this.value == 'string')
            return "".concat(this.property.toString(), " = '").concat(this.value, "'");
        else
            return "".concat(this.property.toString(), " = ").concat(this.value);
    };
    return SQLSet;
}());
exports.SQLSet = SQLSet;
function _connection_init(database_name) {
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'hanser05',
        database: database_name
    });
}
exports._connection_init = _connection_init;
var SQL = /** @class */ (function () {
    function SQL() {
    }
    SQL.SELECT = function (properties, tables, limits, distinct) {
        if (distinct === void 0) { distinct = false; }
        if (properties.length == 0)
            properties = ['*'];
        if (distinct) {
            if (limits == undefined) {
                console.log("select distinct ".concat(properties.toString(), " from ").concat(tables.toString()));
                return ("select distinct ".concat(properties.toString(), " from ").concat(tables.toString()));
            }
            else {
                console.log("select distinct ".concat(properties.toString(), " from ").concat(tables.toString(), " where ").concat(limits));
                return ("select distinct ".concat(properties.toString(), " from ").concat(tables.toString(), " where ").concat(limits));
            }
        }
        else {
            if (limits == undefined) {
                console.log("select ".concat(properties.toString(), " from ").concat(tables.toString()));
                return ("select ".concat(properties.toString(), " from ").concat(tables.toString()));
            }
            else {
                console.log("select ".concat(properties.toString(), " from ").concat(tables.toString(), " where ").concat(limits));
                return ("select ".concat(properties.toString(), " from ").concat(tables.toString(), " where ").concat(limits));
            }
        }
    };
    SQL.INSERT = function (table, values, properties) {
        if (properties !== undefined && properties.length > 0) {
            console.log(("insert into ".concat(table, " (").concat(properties === null || properties === void 0 ? void 0 : properties.toString(), ") values (").concat(values.toString(), ")")));
            return ("insert into ".concat(table, " (").concat(properties === null || properties === void 0 ? void 0 : properties.toString(), ") values (").concat(values.toString(), ")"));
        }
        else {
            console.log(("insert into ".concat(table, " values (").concat(toStringWithTypeSymbol(values), ")")));
            return ("insert into ".concat(table, " values (").concat(toStringWithTypeSymbol(values), ")"));
        }
    };
    SQL.UPDATE = function (table, sets, limits) {
        console.log("update ".concat(table.toString(), " set ").concat(sets.toString(), " where (").concat(limits.toString(), ")"));
        return ("update ".concat(table.toString(), " set ").concat(sets.toString(), " where (").concat(limits.toString(), ")"));
    };
    SQL.DELETE = function (table, limits) {
        if (limits !== undefined) {
            console.log("delete from ".concat(table.toString(), " where ").concat(limits));
            return ("delete from ".concat(table.toString(), " where ").concat(limits));
        }
        else {
            console.log("delete from ".concat(table.toString()));
            return ("delete from ".concat(table.toString()));
        }
    };
    return SQL;
}());
exports.SQL = SQL;
