const { inspect } = require("util");
const differentObjKeys = require("./src/differentObjKeys");
const yourInput = require("./inputHere");

const diff = differentObjKeys(yourInput.origObj, yourInput.newObj);
console.log(inspect(diff, { showHidden: false, depth: null, colors: true }));
