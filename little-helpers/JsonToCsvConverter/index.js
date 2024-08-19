const { convertToCSV } = require('./function');
const method_response = require('./method_response.json');

const csvOutput = convertToCSV(method_response);

console.log(csvOutput);
