const displayOrder = require("./DisplayOrder");
const testData = require("./testData");

describe("displayOrder: set displayOrder in numerical order", () => {
  it("converts 1 object in array", () => {
    expect(displayOrder(testData.test1).toString()).toEqual(
      JSON.stringify(testData.test1).toString()
    );
  });
  it("converts 2 objects that are already correctly numbered", () => {
    expect(displayOrder(testData.test2).toString()).toEqual(
      JSON.stringify(testData.test2).toString()
    );
  });
  it("converts 2 objects that are NOT correctly numbered", () => {
    expect(displayOrder(testData.test3).toString()).toEqual(
      JSON.stringify(testData.result3).toString()
    );
  });
  it("returns empty array unaffected", () => {
    expect(displayOrder(testData.test4).toString()).toEqual(
      JSON.stringify(testData.test4).toString()
    );
  });
  it("returns object with 2 levels, 2 level in order already", () => {
    expect(displayOrder(testData.test5).toString()).toEqual(
      JSON.stringify(testData.result5).toString()
    );
  });
  it("returns object with 2 levels, does NOT affect the 2nd level", () => {
    expect(displayOrder(testData.test6).toString()).toEqual(
      JSON.stringify(testData.result6).toString()
    );
  });
});
