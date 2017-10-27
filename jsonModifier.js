var fs = require('fs');
var path = require('path');

var publicModules  = require(path.join(__dirname,'./input/dependency.json'));
console.log(publicModules);
