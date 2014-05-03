/**
 * main.js
 */

var applicationPort = process.env.PORT || 8012;

var restify = require('restify');

var resp = function (req, res, next) {
    res.send('hello ' + req.params.name);

    next();
};

var nop = function (req, res, next) {
    console.log('nop');
    res.send({code: 404, message: 'Not Found'});

    next();
}

var serveStatic = restify.serveStatic({
    directory: 'static',
    default: 'index.html'
});

var main = function () {

    var server = restify.createServer({name: 'straw-service-registry'});

    server.get('hello/:name', resp);

    server.get(/^.*$/, serveStatic);

    server.listen(applicationPort, function () {
        console.log('%s listening at %s', server.name, server.url);
    });
}

module.exports = main;
