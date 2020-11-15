const del = require('del');

del.sync(["dist"]);
console.log("Deleted the \"dist\" directory.")
