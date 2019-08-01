var exec = require('cordova/exec');

exports.echo = function (arg0, success, error) {
    exec(success, error, 'nicksPlugin', 'echo', [arg0]);
};

exports.getDate = function (arg0, success, error) {
    exec(success, error, 'nicksPlugin', 'getDate', [arg0]);
};