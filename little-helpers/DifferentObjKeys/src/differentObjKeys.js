// const transform = require("lodash.transform");
// const isEqual = require("lodash.isequal");
// const isArray = require("lodash.isarray");
// const isObject = require("lodash.isobject");

/**
 * Find difference between two objects
 * @param  {object} origObj - Source object to compare newObj against
 * @param  {object} newObj  - New object with potential changes
 * @return {array} differences
 */
function differentObjKeys(origObj, newObj) {
  const originalKeys = Object.keys(origObj);
  const newKeys = Object.keys(newObj);

  const notOnA = originalKeys.filter((x) => !newKeys.includes(x));
  const notOnB = newKeys.filter((x) => !originalKeys.includes(x));

  const difference = [...notOnA, ...notOnB];

  return { difference };
}

module.exports = differentObjKeys;
