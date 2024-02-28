// const slugify = require('slugify')// commonjs import
import slugify from 'slugify';

// ES module import

const a = slugify('HEY javascript','$')
console.log(a) //HEY$javascript



// step to use ES module import

// 1)  add  "type": "module", to your package.json.
// 2) save package.json
// 3) in index.js comment down-  const slugify = require('slugify')
// 4) and import as - import slugify from 'slugify';
// 5) save index.js
// 6) run node index.js  in your terminal