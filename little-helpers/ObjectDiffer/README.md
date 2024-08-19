# ObjectDiffer Script

This script will return the keys and values of the second object that don't match the first.

example
```js
const yourInput = {
  origObj: { first: 1, second: 2, third: 3 },
  newObj: { first: 2, second: 2 },
};
```

returns

```js
{ first: 2 }
```

## How to use

- Clone the full repo
- Navigate to the `ObjectDiffer` folder

### Standard Use

- Enter your two objects into the object in file `inputHere.js`
- Type `npm run start` in the console
