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
// code takes each element of array and compares with the other array
// how do you make something that checks if all those values are all the same
// do you convert to number or str

assertArrayEqual([1, 2, 3], [1, 2, 3]) // => true
assertArrayEqual([1, 2, 3], [3, 2, 1]) // => false
assertArrayEqual(["1", "2", "3"], ["1", "2", "3"]) // => true
assertArrayEqual(["1", "2", "3"], ["1", "2", 3]) // => false
assertArrayEqual(["chicken", "hello", "bye"], ["chicken", "hello", "Bye"])