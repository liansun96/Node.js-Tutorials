//CommonJS ,every file is module (by default)
//Modules - Encapsulated Code (only share minimun)

const names = require("./1-names");
const sayMyName = require("./2-ulits");
const data = require("./3-alternative-export-module");
require("./4-mind-grenade");

sayMyName(names.snoop);
sayMyName(names.tupac);

console.log(data);
// console.log(process);