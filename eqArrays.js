const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

let eqArrays = function(array1, array2) {

  for (let i = 0; i < array1.length; i++) {
    assertEqual(array1[i], array2[i]);
    
    //console.log(array1[i], array2[i])
  }
}


assertEqual(eqArrays([1, 2, 3], [1, 2, 3])) // => true
assertEqual(eqArrays([1, 2, 3], [3, 2, 1])) // => false

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"])) // => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3])) // => false

/*
for (let i = 0; i < result.length; i++) {
   assertEqual(result[i], expectedAnswer[i])
}
*/