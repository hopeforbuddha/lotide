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
  // data types need to be the same to be removed so use strict operators ""
  
const without = function(source, toRemove) {
    let newArr = []
  
    for (let full of source) {
      if (!toRemove.includes(full)) {
        newArr.push(full);
      
      }
    }

    console.log(newArr)
    return newArr
}
/*let solution = source = source.filter(function(element){
      return !toRemove.includes(element)
    })*/
without([1, 2, 3], [1]) // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]
without(['hello', 'how are you', 1, 344, 990], ['hello', 'boo', 344])
without([1], [0])


const words = ["hello", "world", "lighthouse"];
console.log(words)
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArrayEqual(words, ["hello", "world", "lighthouse"]);