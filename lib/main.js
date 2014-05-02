/**
 * main.js
 */

var resp = function (req, res, next) {
};

var main = function () {
    var restify = require('restify');

    var server = restify.createServer();

    server.get('hello/:name', resp);

    server.head('hello/:name', resp);

    server.listen(8012, function () {
        console.log('%s listening at %s', server.name, server.url);
    });
}

module.exports = main;
