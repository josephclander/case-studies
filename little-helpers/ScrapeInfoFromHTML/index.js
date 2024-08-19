const fs = require('fs')
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

JSDOM.fromFile("inputData.html").then((dom) => {
  const fields = [];
  // elements that start with property-name
  const list = dom.window.document.querySelectorAll(
    "[data-test^='property-name']"
  );

  for (let i = 0; i < list.length; i++) {
    const object = {};

    object["Values"] = [];
    object["ConnectorField"] = list[i].textContent.trim();
    object["DataType"] =
      list[i].parentElement.lastElementChild.textContent.trim();
    object["Description"] = list[i].parentElement.parentElement
      .nextElementSibling
      ? list[i].parentElement.parentElement.nextElementSibling.textContent
          .replace(/\s{2,}/g, "")
          .trim()
      : "";
    object["DisplayOrder"] = i + 1;
    fields.push(object);
  }

  fs.writeFileSync('parsed.json', JSON.stringify(fields));
  console.log(JSON.stringify(fields, " ", 4));
});



// useful traversal commmands

// nextSibling