const { writeFileSync } = require("fs");

for (let i = 0; i < 10000; i++) {
  writeFileSync('./content/big-text.txt' , `Hello Testing ${i}\n` , {flag : 'a'});
}
