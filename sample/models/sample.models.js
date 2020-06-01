const connection = require('../../common/services/mysql.service');


exports.findAll = (userId) => {
    // "Create a query -- Should return a promise"
    return connection.executeQuery();
};