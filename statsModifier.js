var fs = require('fs');
var path = require('path');
var PublicMod = require('./dependency');

var treeJSON = require(path.join(__dirname, './input/stats.json'));
console.log(treeJSON.children[0].modules.length);
var arr= treeJSON.children[0].modules;

for (var k in PublicMod) {
    var addObj = {};
    if (PublicMod[k].category.categoryName === 'map') {
      // added name that will be used for search
      addObj.name = PublicMod[k].displayName + 'mapCategory';
      addObj.isPublic = true;
      addObj.description = PublicMod[k].description;
      addObj.displayName = PublicMod[k].displayName;
      addObj.size = 0;
      addObj.isUserSelected = true;
      addObj.primaryIndex = PublicMod[k].category.categoryIndex;
      addObj.secondaryIndex = PublicMod[k].category.subcategoryIndex;
      arr.push(addObj);
    }
  }

console.log(treeJSON.children[0].modules.length);

fs.writeFile('./output/resultStats.json', JSON.stringify(treeJSON), 'utf8', function (err) {
    if (err) throw err;
})
