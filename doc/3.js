let requireFromString = require('require-from-string');
let result = requireFromString(`module.exports = "hello"`);
console.log(result);