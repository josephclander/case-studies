# DisplayOrder Script

A helper script that will set all object `DisplayOrder` fields in a given array into correct numerical order.

Example

```js
const array = [
    {field1: "hello", DisplayOrder: 2},
    {field1: "hi", DisplayOrder: 1},
    {field1: "howdy", DisplayOrder: 3},
]
```

converted to 

```js
const array = [
    {field1: "hello", DisplayOrder: 1},
    {field1: "hi", DisplayOrder: 2},
    {field1: "howdy", DisplayOrder: 3},
]
```

## How to use

- Clone the full repo
- Navigate to the `DisplayOrder` folder

### Standard Use

- Paste objects where you want them in the array without consideration for the value of the `DisplayOrder` fields
- Enter your edited array into the variable in `inputHere.js`
- Type `npm run start` in the console
- The json result will be logged to the console for copying

### How it works

Once the objects are in the order you want, the function will run through the objects and rewrite each DisplayOrder field with the current index.

**Note:** This function will **NOT** affect an array of objects with `DisplayOrder` a second level down.

### Testing

It can be difficult to check large data files match precisely so testing capabilities have been added. A small sample of tests have been initially included but it would be ideal if further examples were added for robustness.

### Adding more example tests

- Install the node modules with `npm i`
- Add a test array and result in `testData.js` in the same format as the other tests
- Remember to add the variables to the `module.exports`
- Tests are written in `DisplayOrder.test.js`
    - Follow the standard `jest` format for writing tests
    - You can copy the format of the current tests
- Type `npm run test` in the console to confirm the function works for this example
