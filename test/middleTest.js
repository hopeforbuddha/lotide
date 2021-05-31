const middle = require("../middle")
const assertArrayEqual = require("../assertArrayEqual")

assertArrayEqual(middle([1, 2, 3]), [2]) // => [2]
assertArrayEqual(middle([1, 2, 3, 4, 5]), [3]) // => [3]
assertArrayEqual(middle([1]), [])
assertArrayEqual(middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), [5, 6])
assertArrayEqual(middle([1, 2, 3, 4]), [2, 3])
assertArrayEqual(middle([1, 2]), [])