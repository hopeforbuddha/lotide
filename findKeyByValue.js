const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

const findKeyByValue = function (object, value) {
  for (const keys of Object.keys(object)) {
    if (object[keys] === value) {
     return keys;
    }
  }
  return "there is no show with that name: " + value;
}

module.exports = findKeyByValue;