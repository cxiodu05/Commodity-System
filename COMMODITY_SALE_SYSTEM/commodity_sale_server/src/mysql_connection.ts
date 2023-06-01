import * as mysql from 'mysql'

export function toStringWithTypeSymbol(arr: Array<any>): string {
    let str = ''
    for (let i = 0; i < arr.length - 1; i++) {
        if (typeof arr[i] == "string") {
            str += `\'${arr[i].toString()}\',`
        } else str += `${arr[i].toString()},`
    }
    if (typeof arr[arr.length - 1] == "string") {
        str += `\'${arr[arr.length - 1].toString()}\'`
    } else str += `${arr[arr.length - 1].toString()}`
    return str
}

export class SQLSet {
    property: string;
    value: any;
    constructor(property: string, value: any) {
        this.property = property
        this.value = value
    }
    toString(): string {
        if (typeof this.value == 'string') return `${this.property.toString()} = \'${this.value}\'`
        else return `${this.property.toString()} = ${this.value}`
    }
}


export function _connection_init(database_name: string): mysql.Connection {
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'hanser05',
        database: database_name,
    })
}

export class SQL {
    static SELECT(properties: string[], tables: string[], limits?: string, distinct = false): string {
        if (properties.length == 0) properties = ['*']
        if (distinct) {
            if (limits == undefined) {
                console.log(`select distinct ${properties.toString()} from ${tables.toString()}`)
                return (`select distinct ${properties.toString()} from ${tables.toString()}`)
            } else {
                console.log(`select distinct ${properties.toString()} from ${tables.toString()} where ${limits}`)
                return (`select distinct ${properties.toString()} from ${tables.toString()} where ${limits}`)
            }
        } else {
            if (limits == undefined) {
                console.log(`select ${properties.toString()} from ${tables.toString()}`)
                return (`select ${properties.toString()} from ${tables.toString()}`)
            } else {
                console.log(`select ${properties.toString()} from ${tables.toString()} where ${limits}`)
                return (`select ${properties.toString()} from ${tables.toString()} where ${limits}`)
            }
        }

    }
    static INSERT(table: string, values: any[], properties?: string[]): string {
        if (properties !== undefined && properties.length > 0) {
            console.log((`insert into ${table} (${properties?.toString()}) values (${values.toString()})`))
            return (`insert into ${table} (${properties?.toString()}) values (${values.toString()})`)
        }
        else {
            console.log((`insert into ${table} values (${toStringWithTypeSymbol(values)})`))
            return (`insert into ${table} values (${toStringWithTypeSymbol(values)})`)
        }

    }
    static UPDATE(table: string, sets: SQLSet[], limits: string): string {
        console.log(`update ${table.toString()} set ${sets.toString()} where (${limits.toString()})`);
        return (`update ${table.toString()} set ${sets.toString()} where (${limits.toString()})`)
    }
    static DELETE(table: string, limits?: string): string {
        if (limits !== undefined) {
            console.log(`delete from ${table.toString()} where ${limits}`)
            return (`delete from ${table.toString()} where ${limits}`)
        } else {
            console.log(`delete from ${table.toString()}`)
            return (`delete from ${table.toString()}`)
        }

    }
}

