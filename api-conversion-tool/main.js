const conversion = function (data) {
  if (!data.attributes)
    return { message: "no 'attributes' array from provider" };

  const dataMap = {};
  let errorCount = 0;

  data.attributes.forEach((attr) => {
    const key = attr['key'];
    const value = attr['value'];

    if (!key || !value) {
      errorCount += 1;
    } else {
      dataMap[key] = value;
    }
  });
  if (errorCount > 0) {
    dataMap['unexpected_values'] = errorCount;
  }

  return dataMap;
};

module.exports = conversion;
