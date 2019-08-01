var exec = require('cordova/exec');

let service = 'NicksPlugin';

exports.echo = function (arg0, success, error) {
	console.log("js called echo");
    exec(success, error, service, 'echo', [arg0]);
};

exports.getDate = function (arg0, success, error) {
	console.log("js called Date");
    exec(success, error, service, 'getDate', [arg0]);
};