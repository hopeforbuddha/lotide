let assertArrayEqual = require("./assertArrayEqual");

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


module.exports = middle;