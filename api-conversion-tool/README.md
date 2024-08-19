# API Conversion Tool

![tests](https://github.com/josephclander/api-conversion-tool/actions/workflows/node.js.yml/badge.svg)

A function to convert an api provider's response data into in-house standard format.

## Standard Solution Explanation

The standard solution loops the given data and builds a map of the individual attributes, then returns it.

```js
const conversion = function (data) {
  const dataMap = {};

  data.attributes.forEach((attr) => {
    const key = attr["key"];
    const value = attr["value"];
    dataMap[key] = value;
  });

  return dataMap;
};
```

To build a hash/map is a common pattern, is algorithmically efficient and automatically scales for any amount of objects in the array. Variables have been made for readability.

## Extended Solution Explanation

However, the happy path solution assumes the provider has given the information in the precise format of:

- attributes array
- containing objects
- with keys
  - key
  - value

But we know apis can be updated, not follow their own schema or have unexpected data, so I've devised some further tests to give sufficient user feedback if there is an issue. This is not an exhaustive list but meant to show that consideration has been taken for edge cases. It means our code will inform us of any changes we may miss and in the worst case ensures we provide users with feedback that reflects we are aware of an issue on the **provider's** response.

Other considerations could include:

- trimming whitespace from data
- provide a list of missing/extra data keys received than expected

```js
const conversion = function (data) {
  if (!data.attributes)
    return { message: "no 'attributes' array from provider" };

  const dataMap = {};
  let errorCount = 0;

  data.attributes.forEach((attr) => {
    const key = attr["key"];
    const value = attr["value"];

    if (!key || !value) {
      errorCount += 1;
    } else {
      dataMap[key] = value;
    }
  });
  if (errorCount > 0) {
    dataMap["unexpected_values"] = errorCount;
  }

  return dataMap;
};
```

## Input - Output: Example Tests

The first test follows the happy path for the example given. I have then added further examples to highlight where I believe the data may not come back as expected and how to deal with that.

### 1. This is the standard happy path information given to convert.

input example:

```json
{
  "attributes": [
    {
      "key": "email",
      "value": "jamesd@example.com"
    },
    {
      "key": "name",
      "value": "James Dean"
    },
    {
      "key": "shoesize",
      "value": 10
    }
  ]
}
```

output example:

```json
{
  "email": "jamesd@example.com",
  "name": "James Dean",
  "shoesize": 10
}
```

### 2. array not called 'attributes'

input example:

```json
{
  "newTitle": [
    {
      "key": "email",
      "value": "jamesd@example.com"
    },
    {
      "key": "name",
      "value": "James Dean"
    },
    {
      "key": "shoesize",
      "value": 10
    }
  ]
}
```

output example:

```json
{
  "message": "no 'attributes' array from provider"
}
```

### 3. missing expected "key" and "value" keys

input example:

```json
{
  "attributes": [
    {
      "different": "email",
      "value": "jamesd@example.com"
    },
    {
      "key": "name",
      "not_value": "James Dean"
    },
    {
      "key": "shoesize",
      "value": 10
    }
  ]
}
```

output example:

```json
{
  "shoesize": 10,
  "unexpected_values": 2
}
```
