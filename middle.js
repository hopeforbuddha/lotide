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
};

let assertArrayEqual = function(arr1, arr2) {
  let toEqual = eqArrays(arr1, arr2)
  
  if (toEqual === true) {
    console.log(`✅✅✅Assertion Passed: ${arr1} === ${arr2}`)
  } else if (toEqual === false) {
    console.log(`🛑🛑🛑Assertion Failed: ${arr1} !== ${arr2}`)
    } 
  };

const middle = function(arr) {
  let newArr = [];
  if (arr.length < 3){
    return []
  }
  let mid = Math.floor(arr.length / 2)
  if (arr.length % 2 === 0) {
    newArr.push(arr[mid - 1])
    newArr.push(arr[mid])
  } else {
    newArr.push(arr[mid])
  }
  //console.log(newArr)
  return newArr
}


assertArrayEqual(middle([1, 2, 3]), [2]) // => [2]
assertArrayEqual(middle([1, 2, 3, 4, 5]), [3]) // => [3]
assertArrayEqual(middle([1]), [])
assertArrayEqual(middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), [5, 6])
assertArrayEqual(middle([1, 2, 3, 4]), [2, 3])
assertArrayEqual(middle([1, 2]), [])