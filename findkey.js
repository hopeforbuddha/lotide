const findKey = function(object, callback) {
  let x = ''
  for (let obj in object) {
    if (callback(object[obj]) === true) {
      return obj
    } 
  }
};


module.exports = findKey;