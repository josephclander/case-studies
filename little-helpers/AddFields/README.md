# DisplayOrder Script

A helper script that will add fields to an object in an array if it isn't present with the value 'Undefined'.
This will allow you to more easily locate and change values in an array of objects.

Example

As the second field in this array didn't have an assigned DataType, there is no field. This can make checking for values of a field difficult as well as having nothing to 'find' when using find and replace in your code editor.

```js
const array = [
  {
    Values: [],
    ConnectorField: "entity.total_price",
    SystemField: "TotalPrice",
    DataType: "Float",
    DisplayName: "Total Price",
    DisplayOrder: 1,
  },
  {
    Values: [],
    ConnectorField: "entity.discount_type",
    SystemField: "DiscountType",
    DisplayName: "Discount Type",
    DisplayOrder: 2,
  },
];
```

converted to

```js
const array = [
  {
    Values: [],
    ConnectorField: "entity.total_price",
    SystemField: "TotalPrice",
    DataType: "Float",
    DisplayName: "Total Price",
    DisplayOrder: 1,
  },
  {
    Values: [],
    ConnectorField: "entity.discount_type",
    SystemField: "DiscountType",
    DataType: "Undefined",
    DisplayName: "Discount Type",
    DisplayOrder: 2,
  },
];
```

## How to use

- Clone the full repo
- Navigate to the `AddFields` folder

### Standard Use

- Enter your array into the variable in `inputHere.js`
- Add all strings that you want added to your `fields` entry
- Type `npm run start` in the console
- The json result will be logged to the console for copying
- Note this is non-destructive, if you make an error in your field names, change your entries, go again
