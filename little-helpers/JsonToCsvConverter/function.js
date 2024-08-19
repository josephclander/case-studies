/**
 * Convert an array of objects into a csv format
 * @param {obj[]} objArray
 * @returns csv text file
 */
function convertToCSV(objArray) {
  // intialize output string
  let str = '';

  // add headers to string (taking from the first object)
  const headers = Object.keys(objArray[0]);
  // \r\n is a new line - ok on windows and unix machines
  str += `${headers.join(',')}\r\n`;

  // loop better for memory than storing lines in an array
  for (let i = 0; i < objArray.length; i++) {
    let line = '';
    const object = objArray[i];
    // iterate over the object field values
    for (let index in object) {
      // comma separator if a value exists already
      if (line != '') line += ',';
      // add to the current line
      line += objArray[i][index];
    }
    // add new line and line break
    str += line + '\r\n';
  }

  return str;
}

module.exports = { convertToCSV };
