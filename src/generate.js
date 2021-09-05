const speakeasy = require("speakeasy");

const envSecret = speakeasy.generateSecret();

console.log(envSecret);
