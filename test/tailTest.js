const tail = require("../tail.js")
const assertEqual = require("../assertEqual")

const expectedAnswer = ["Lighthouse", "Labs"]
let arr = ["Hello", "Lighthouse", "Labs"]
const result = tail(arr);
assertEqual(result, ["Lighthouse", "Labs"]);
assertEqual(result[0], "Lighthouse");
assertEqual(result[1], "Labs");
assertEqual(arr.length, 3)
assertEqual(result.length, 2)