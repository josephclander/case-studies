const conversion = require('./main');
const example_01_input = require('./examples/example_01_input.json');
const example_01_output = require('./examples/example_01_output.json');
const example_02_input = require('./examples/example_02_input.json');
const example_02_output = require('./examples/example_02_output.json');
const example_03_input = require('./examples/example_03_input.json');
const example_03_output = require('./examples/example_03_output.json');

describe('Conversion tool for api response data', () => {
  it('converts "attributes" array with standard 3 values', () => {
    expect(conversion(example_01_input)).toEqual(example_01_output);
  });
  it('returns message when no "attributes" title', () => {
    expect(conversion(example_02_input)).toEqual(example_02_output);
  });
  it('returns message when no "key" or "value" key', () => {
    expect(conversion(example_03_input)).toEqual(example_03_output);
  });
});
