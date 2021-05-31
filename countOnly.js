
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

 console.log(newObj)
  return newObj
}
 module.exports = countOnly;