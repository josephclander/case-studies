const addFields = require("./src/addFields");
const yourInput = require("./inputHere");

// convert js to json to copy from the console
const json = addFields(yourInput.array, yourInput.fields);
console.log(json);
