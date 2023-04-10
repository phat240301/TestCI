// const {add,minus} = require('./operator');
const {singUp,sendOTP} = require('./operator');
const utill = require('util');
var a = 0938270524;
console.log(utill.format('%d',a,singUp(a)));
console.log(utill.format('%d',a,sendOTP(a)));