var mysql = require('mysql');
const datab = require('../config/data.config');

var pool = mysql.createPool({
    connectionLimit: 200,
    connectTimeout: 5000,
    debug: true,
    waitForConnection: true,
    compression: true,
    host: datab.host,
    port: datab.port,
    user: datab.username,
    password: datab.password,
    database: datab.schema,
    insecureAuth: true
});


exports.executeQuery = (sqlQry, values) => {
    return new Promise(function (resolve, reject) {
        pool.getConnection((err, connection) => {
            connection.query(sqlQry, [values], function (error, results, fields) {

                connection.release();

                if (error) {
                    console.log('\x1b[41m%s\x1b[0m', "==============================================================");
                    console.log({
                        error: "true",
                        message: error.message,
                        query: sqlQry,
                        values: values,
                    });
                    console.log('\x1b[41m%s\x1b[0m', "==============================================================");
                    reject(error.code);
                } else {
                    console.log('\x1b[32m%s\x1b[0m', "==============================================================");
                    console.log({
                        error: "false",
                        message: "Query executed Successfuly",
                        query: sqlQry,
                        values: values,
                    });
                    console.log('\x1b[32m%s\x1b[0m', "==============================================================");
                    resolve(results);
                }
            });
        });
    });
}
