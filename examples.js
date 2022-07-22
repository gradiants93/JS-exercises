var myDate = new Date();
console.log(myDate);
const aThing = require('./config');

console.log(aThing)

var myPastDate = new Date(1545, 11, 2, 10, 30, 15);
var myFutureDate = new Date(2514, 0, 31, 10, 30, 15);
console.log(myPastDate)
console.log(myFutureDate)
var birthday = new Date(1993, 1, 15);
var birthday2 = new Date(1993, 1, 15);
console.log(birthday.getTime())
if(birthday.getTime()==birthday2.getTime()) {
  console.log("equal")
} else {
  console.log("not equal")
} 