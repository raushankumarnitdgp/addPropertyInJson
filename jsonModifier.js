var fs = require('fs');
var path = require('path');

var publicModules  = require(path.join(__dirname,'./input/xt-edge-storage.json'));
// console.log(publicModules);
var category = ['chart',]

for(var plotObj in publicModules) {
    publicModules[plotObj].description = 'Visualize Data in ' + plotObj;
    publicModules[plotObj].displayName = plotObj;
    publicModules[plotObj].category = {};
}

console.log(publicModules);
