const sampleController = require('./controllers/sample.controllers');

exports.routesConfig = function (app) {
    app.get('/v1/sample', [
        sampleController.getAll
    ]);
}