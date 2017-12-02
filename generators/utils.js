const figlet = require('figlet');
const chalk = require('chalk');
const path = require('path');
const fse = require('fs-extra');

//Colors
const error = chalk.bold.red;
const warning = chalk.keyword('orange');
const info = chalk.keyword('cyan');
Function.prototype.promisify = function () {
	const original = this;
	return function (...args) {
		return new Promise((resolve, reject) => {
			original(...args, (error, data) =>{
				if(error){
					return reject(error);
				}
				return resolve(data);
			});
		});
	};
};
function asciiPrint(banner, done){
	figlet(banner, function (err, str) {
		if (err) {
			return done(`While loading figlet ${err.message}`);
		}
		console.log(info(str));
		done(null, true);
	});
}
const fileCopyFilter = (src) => {
	return !~src.indexOf('node_modules');
};
module.exports = {
	asciiPrint: (banner) => asciiPrint.promisify()(banner),
	copy: (src, dest) => fse.copy(src, dest, { filter: fileCopyFilter }),
	paths: {
		app: path.resolve(__dirname, '../'),
		src: path.resolve(__dirname, '../ng-kendo-ui-seed/')
	}
};
