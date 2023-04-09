const {add,minus} = require('./operator');
const utill = require('util');
var a = 10;
var b = 5;
console.log(utill.format('%d+%d=%d',a,b,add(a,b)));
console.log(utill.format('%d-%d=%d',a,b,minus(a,b)));