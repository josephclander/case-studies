const countingHash = (values) => {
  const hash = {};
  values.forEach((type) => {
    if (hash[type]) return (hash[type] += 1);
    return (hash[type] = 1);
  });

  return hash;
};

/**
 * Convert JSON into the Cyclr output
 * @param {object} input
 * @return {json}
 */
function functionName(input) {
  const types = {
    integer: 1,
    number: 1,
    boolean: true,
    string: "string",
    date: "2023-08-02T16:38:33Z",
    array: null,
  };

  const fieldNames = Object.keys(input.properties);
  const output = {};
  fieldNames.forEach(
    (fieldName) => (output[fieldName] = types[input.properties[fieldName].type])
  );

  return JSON.stringify(output);
}

module.exports = functionName;
