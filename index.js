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

// ___________________________________

const http = require('http');
const port = +process.env.port || 4000;

http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.end('<center><h1>Welcome Home To Our Page!</h1> <h3> This font is in h3 bih!!</h3>\n </center>');
}).listen(port , ()=> {
  console.log(`server is running on http://localhost:${port}`);
});
