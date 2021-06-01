const eqObjects = require("./eqObjects");

const assertObjectsEqual = function(actual, expected) {
  let toEqual = eqObjects(actual, expected)
  const inspect = require("util").inspect;
  if (toEqual === true) {
    console.log(`✅✅✅Assertion Passed: ${inspect(actual)} === ${expected}`)
  } else if (toEqual === false) {
    console.log(`🛑🛑🛑Assertion Failed: ${inspect(actual)} !== ${expected}`)
    } 
};

module.exports = assertObjectsEqual;