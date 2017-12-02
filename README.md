# generator-ng-kendo-ui
Generator for kendo angular ui components.  

## How to install
```
npm install -g yo generator-ng-kendo-ui
```

## How to start
```
yo ng-kendo-ui
```
### Prerequisite:
1. [NodeJs](https://nodejs.org/en/download/): v6.10.1(LTS)
2. [NPM](https://www.npmjs.com/)(Comes along with nodejs)
3. [Python(Optional)](https://www.python.org/downloads/)(Requires to build some of the nodejs modules)
4. [GIT](https://git-scm.com/downloads)

### Initial Setup
**Make sure you have Node version ~= v6.10.1(LTS) and NPM >= 3** 

### NPM configs[Optional]: 
Since cst-ui-cli is internal module. We need to set up npm environment to bypass via proxy.
```bash
# Internal Proxy
npm config set proxy ur_proxy_url
npm config set https-proxy ur_proxy_url
npm config set http-proxy ur_proxy_url

#Registry
npm config set "@progress:registry" https://registry.npm.telerik.com/
npm config set "@angular:registry" https://registry.npmjs.org/

#Or Edit/Add ~/.npmrc
@progress:registry=https://registry.npm.telerik.com/
@angular:registry=https://registry.npmjs.org/
```
###Python[Optional] 
```
npm config python /usr/bin/python2.7
```
####[Optional] Global prefix
(To avoid global node module install)
```bash
Windows:
npm config set prefix C:\Users\{username}\.npm-global
Mac/Linux
npm config set prefix /Users/{username}/.npm-global
```
###[Followed by previous step] 
**-Windows:** 
```
setx PATH "%PATH%;C:\Users\{username}\.npm-global;"
```
**-Mac/Linux:**  
```bash
#Add in ~/.bashrc or ~/.profile or ~/.bashrc_profile 
export PATH=$PATH:/Users/{username}/.npm-global/bin/
#Execute
source ~/.bashrc #(or ~/.profile or ~/.bashrc_profile)
```
**Note:** Make sure prefix path should include your user directory + .npm-global

##Change Logs:
* First Draft: [v0.0.1](https://github.com/deepakshrma/generator-ng-kendo-ui/releases/tag/v0.0.1)
Import angular kendo ui libs, first draft of seed without templates

**Note:** Still work in progress

## Further help
Kendo UI: https://www.telerik.com/kendo-angular-ui/components  
Angular: https://angular.io  
Yeoman: http://yeoman.io/  
generator-ng-kendo-ui: https://github.com/deepakshrma/generator-ng-kendo-ui/issues
