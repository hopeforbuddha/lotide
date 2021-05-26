const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};
// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
let countOnly = function(allItems, itemsToCount) {
  let newObj = {};
  for (const counts of allItems) {
    if (newObj[counts]) {
      newObj[counts] += 1;
    } else {
      newObj[counts] = 1;
    }
    console.log(counts)

  }
  /*for (const counts of allItems) {
    for (let names in itemsToCount)
    if (itemsToCount === counts && itemsToCount[names] === true)
    newObj =
    console.log(newObj)
  }
  */
 console.log(newObj)
  return newObj
}

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);

// we have a list of names some are repeating and we have an object of names we want to find
// we take the object 