let eqArrays = function(array1, array2) {
  let sameLength = array1.length === array2.length
  if (sameLength === true) {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false
      } 
    }
    return true
  } else {
    return false
  }
}

let assertArrayEqual = function(arr1, arr2) {
  let toEqual = eqArrays(arr1, arr2)
  
  if (toEqual === true) {
    console.log(`✅✅✅Assertion Passed: ${arr1} === ${arr2}`)
  } else if (toEqual === false) {
    console.log(`🛑🛑🛑Assertion Failed: ${arr1} !== ${arr2}`)
    } 
  }

const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    let newArr = []; 
  }
  return results;
};
letterPositions("hello")
assertArraysEqual(letterPositions("hello").e, [1]);