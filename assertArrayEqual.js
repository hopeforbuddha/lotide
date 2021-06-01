let eqArrays = require("./eqArrays")

let assertArrayEqual = function(arr1, arr2) {
  let toEqual = eqArrays(arr1, arr2)
  
  if (toEqual === true) {
    console.log(`✅✅✅Assertion Passed: ${arr1} === ${arr2}`)
  } else if (toEqual === false) {
    console.log(`🛑🛑🛑Assertion Failed: ${arr1} !== ${arr2}`)
    } 
  };

module.exports = assertArrayEqual;