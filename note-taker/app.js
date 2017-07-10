const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const notes = require('./notes.js');

console.log("Starting app.js")

let list = [1,1,2,3,4]

console.log(_.uniq(list));

// console.log(_.isString(true));
// console.log(_.isString("Andrew"));

// let sum = notes.add(1,2);
// console.log("SUM", sum)

// let res = notes.addNote();
// console.log(res)
// let user = os.userInfo();
//
// fs.appendFileSync("greetings.txt", `Hello ${user.username}! You are ${notes.age}!`);

// fs.appendFile("greetings.txt", "Hello, world", function(err) {
//   if (err) {
//     console.log("Unable to write to file");
//   }
// })
