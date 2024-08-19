const jsdom = require("jsdom");
const { JSDOM } = jsdom;
/**
 *
 * @param {} input
 * @return {json}
 */
function functionName(input) {
  const dom = new JSDOM(input);
  console.log(dom.window.document.querySelector("data-test").textContent);
}

module.exports = functionName;
