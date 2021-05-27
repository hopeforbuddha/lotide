const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(string) {
  let newObj = {};

  for (const letters of string) {
    if (letters !== " ") {
      if (newObj[letters]) {
        newObj[letters] += 1;
      } else {
        newObj[letters] = 1;
      }
    }
  }

  console.log(newObj);
  return newObj;
};

countLetters("lighthouse in the house");