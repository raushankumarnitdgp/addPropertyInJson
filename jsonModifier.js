var fs = require('fs');
var path = require('path');

var publicModules = require(path.join(__dirname, './input/dependency.json'));
// console.log(publicModules);
var categoryArr = ['chart', 'powerchart', 'widget', 'xTranscoder', 'map'];
var categoryCount = [1, 1, 1, 1, 1];

for (var plotObj in publicModules) {
    var categoryName = '';
    publicModules[plotObj].description = 'Visualize Data in ' + plotObj;
    publicModules[plotObj].displayName = plotObj;
    if (!publicModules[plotObj].category) {
        categoryName = 'map';
    } else {
        categoryName = publicModules[plotObj].category;
    }
    publicModules[plotObj].category = {};
    publicModules[plotObj].category.categoryName = categoryName;
    publicModules[plotObj].category.categoryIndex = categoryArr.indexOf(categoryName) + 1;
    publicModules[plotObj].category.subcategoryIndex = categoryCount[categoryArr.indexOf(categoryName)]++;
}

console.log(publicModules);

fs.writeFile('./output/resultDependency.json', JSON.stringify(publicModules), 'utf8', function (err) {
    if (err) throw err;
})