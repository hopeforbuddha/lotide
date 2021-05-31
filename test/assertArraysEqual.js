const assertArrayEqual = require("../assertArrayEqual")

assertArrayEqual([1, 2, 3], [1, 2, 3]) // => true
assertArrayEqual([1, 2, 3], [3, 2, 1]) // => false
assertArrayEqual(["1", "2", "3"], ["1", "2", "3"]) // => true
assertArrayEqual(["1", "2", "3"], ["1", "2", 3]) // => false
assertArrayEqual(["chicken", "hello", "bye"], ["chicken", "hello", "Bye"])