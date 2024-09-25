const crypto = require("node:crypto");
const randomNumber = crypto.randomInt(20);
const randomHexNumber = crypto.randomBytes(16);

console.log("Random hexadecimal number:", randomHexNumber);
console.log(`The random integer number is ${randomNumber}`);
