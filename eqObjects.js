const eqArrays = require("./eqArrays");
const eqObjects = function(object1, object2) {
  for (const key of Object.keys(object1)) {
    if (Array.isArray(object1[key])) {
      let value = eqArrays(object1[key], object2[key])
      if (value !== false) {
        return true;
      } else if (object1[key] !== object2[key]) {
        return false
      } 
    }
  }
  return true
};

module.exports = eqObjects;