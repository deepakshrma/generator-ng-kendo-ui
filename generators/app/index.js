const Generator = require('yeoman-generator');
const { asciiPrint, copy, paths } = require('./../utils');
module.exports = class extends Generator {
    constructor(args, opts) {
        super(args, opts);
    }
    init() {
        const done = this.async();
		asciiPrint('ng-kendo-ui').then(() => {
			this._prompting(done);
        });
    }
	clone(){
        return copy(paths.src, this.destinationRoot())
    }
    save(){
	    this.config.save();
        this.installDependencies({
			npm: true,
			bower: false,
			yarn: false
		});
		this.spawnCommand('npm', ['install']);
    }
	_prompting(done) {
		return this.prompt([{
			type    : 'input',
			name    : 'name',
			message : 'Your project name',
			default : this.appname // Default to current folder name
		}, {
			type    : 'confirm',
			name    : 'chromeHeadless',
			message : 'Would you like to enable ChromeHeadless?'
		}]).then((answers) => {
			this.config.set('projectName', answers.name);
			this.config.set('chromeHeadless', answers.chromeHeadless);
			if(this.appname !== answers.name){
				this.destinationRoot(`${this.destinationRoot()}/${answers.name}`)
            }
			done();
		});
	}
};