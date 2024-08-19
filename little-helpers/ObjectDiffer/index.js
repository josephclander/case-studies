const { inspect } = require("util");
const objectDiffer = require("./src/objectDiffer");
const yourInput = require("./inputHere");

// convert js to json to copy from the console
const diff = objectDiffer(yourInput.origObj, yourInput.newObj);
console.log(inspect(diff, { showHidden: false, depth: null, colors: true }));
