/// <binding ProjectOpened='Watch - Development' />

var environment = (process.env.NODE_ENV || "development").trim();

//if (environment === "development") {
    module.exports = require('./webpack.dev.js');
//}
//else if (environment === "test") {
//    module.exports = require('./webpack.test.js');
//} else {
//    module.exports = require('./webpack.prod.js');
//}