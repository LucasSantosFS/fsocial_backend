var mysql = require('mysql');
const datab = require('../config/data.config');

var connection = mysql.createConnection({
    host: datab.host,
    port: datab.port,
    user: datab.username,
    password: datab.password,
    database: datab.schema,
    insecureAuth: true
});


exports.executeQuery = (sqlQry, values) => {
    return new Promise(function (resolve, reject) {
        connection.query(sqlQry, [values], function (error, results, fields) {
           connection.destroy(); //
            if (error) {
                console.log('\x1b[41m%s\x1b[0m',"==============================================================");
                console.log({
                    error: "true",
                    message: error.message,
                    query: sqlQry,
                    values: values,
                });
                console.log('\x1b[41m%s\x1b[0m',"==============================================================");
                reject(error.code);
            } else {
                console.log('\x1b[32m%s\x1b[0m',"==============================================================");
                console.log({
                    error: "false",
                    message: "Query executed Successfuly",
                    query: sqlQry,
                    values: values,
                });
                console.log('\x1b[32m%s\x1b[0m',"==============================================================");
                resolve(results);
            }
        })
    })

}