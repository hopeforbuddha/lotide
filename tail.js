const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

let tail = function(array) {
  
  let vars = array.slice(1 ,3);
  
  
  
  //console.log('vars ~~~', vars)
  //console.log('array ~~~', array)
  return vars;
};

let arr = ["Hello", "Lighthouse", "Labs"]
const result = tail(arr);
assertEqual(result[0], "Lighthouse");
assertEqual(result[1], "Labs");
assertEqual(arr.length, 3)
assertEqual(result.length, 2)