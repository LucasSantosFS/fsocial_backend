const config = require('./common/config/env.config');

const express = require('express');
const app = express();
const bodyParser = require('body-parser');


const sampleRouter = require('./sample/route.config');


app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE');
    res.header('Access-Control-Expose-Headers', 'Content-Length');
    res.header('Access-Control-Allow-Headers', 'Accept, Authorization, Content-Type, X-Requested-With, Range');
    if (req.method === 'OPTIONS') {
        return res.send(200);
    } else {
        return next();
    }
});

app.use(bodyParser.json());

sampleRouter.routesConfig(app);


app.listen(config.port, () => {
    console.log('\x1b[36m%s\x1b[0m', 
    `########################################\n
\tWelcome to F_Social Backend,\n   The app is listening on port ${config.port}
    \n########################################\n`);
});