const middle = require("../middle");
const assert = require("chai").assert;

/*
assertArrayEqual(middle([1, 2, 3]), [2]) // => [2]
assertArrayEqual(middle([1, 2, 3, 4, 5]), [3]) // => [3]
assertArrayEqual(middle([1]), [])
assertArrayEqual(middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), [5, 6])
assertArrayEqual(middle([1, 2, 3, 4]), [2, 3])
assertArrayEqual(middle([1, 2]), [])
*/
describe("#middle", () => {
  it("returns [2] for [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
  it("returns [5, 6] for [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), [5, 6])
  })
  it("returns [] for [1, 2]", () => {
    assert.deepEqual(middle([1, 2]), [])
  })
});
