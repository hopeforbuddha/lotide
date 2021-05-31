const assertEqual = require("./assertEqual")

let tail = function(array) {
  
  let vars = array.slice(1 ,3);
  return vars;
};



module.exports = tail;