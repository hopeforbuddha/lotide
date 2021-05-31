
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

module.exports = countLetters