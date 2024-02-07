// var fs = require('fs');

// fs.writeFile('multiplication.js', 'You can create the functiob below',function (err) {
//   if (err) throw err;
//   console.log('Saved!');
// });

// fs.writeFile('division.js', 'i believe in you',function (err) {
//     if (err) throw err;
//     console.log('Saved!');
//   });


let {mutlitply} = require('./multiplication')
let {division} = require('./division')

console.log(mutlitply(2,3));
console.log(division(2,1));