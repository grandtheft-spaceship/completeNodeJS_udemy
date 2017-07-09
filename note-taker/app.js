const fs = require('fs');
const os = require('os');

console.log("Starting app")

let user = os.userInfo();

fs.appendFileSync("greetings.txt", `Hello ${user.username}!`);

// fs.appendFile("greetings.txt", "Hello, world", function(err) {
//   if (err) {
//     console.log("Unable to write to file");
//   }
// })
