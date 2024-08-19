/**
 * Add descriptions to a connector that's already formed
 * @param {} input
 * @return {json}
 */
function functionName(input) {
  input.fields.forEach((field) => {
    field["Description"] =
      input.descriptions[field["ConnectorField"]].description;
  });
  return JSON.stringify(input.fields);
}

module.exports = functionName;
