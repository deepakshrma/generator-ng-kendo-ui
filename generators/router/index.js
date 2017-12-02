/*
class Nothing extends Generator{
	constructor(args, opts) {
		super(args, opts);
		this.option('babel');
		// This makes `appname` a required argument.
		this.argument('appname', { type: String, required: true });

		// And you can then access it later; e.g.
		this.log(this.options.appname);
		// This method adds support for a `--coffee` flag
		this.option('coffee');

		// And you can then access it later; e.g.
		this.scriptSuffix = (this.options.coffee ? ".coffee": ".js");

	}
	method1() {
		this.log('method 1 just ran');
	}

	method2() {
		this.log('method 2 just ran');
	}
	installingLodash() {
		this.npmInstall(['lodash'], { 'save-dev': true });
	}
	paths() {
		this.destinationRoot();
		// returns '~/projects'

		this.destinationPath('index.js');
		// returns '~/projects/index.js'
	}
	paths() {
		this.sourceRoot();
		// returns './templates'

		this.templatePath('index.js');
		// returns './templates/index.js'
	}
	writing() {
		this.fs.copyTpl(
			this.templatePath('index.html'),
			this.destinationPath('public/index.html'),
			{ title: 'Templating with Yeoman' }
		);
	}
	_private_method() {
		console.log('private hey');
	}
	asyncTask() {
		var done = this.async();

		getUserEmail(function (err, name) {
			done(err);
		});
	}
	prompting() {
		return this.prompt([{
			type    : 'input',
			name    : 'name',
			message : 'Your project name',
			default : this.appname // Default to current folder name
		}, {
			type    : 'confirm',
			name    : 'cool',
			message : 'Would you like to enable the Cool feature?'
		}]).then((answers) => {
			this.log('app name', answers.name);
			this.log('cool feature', answers.cool);
		});
	}
}
*/
