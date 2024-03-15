const { readFile, writeFile } = require("fs");

console.log('start');
readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;
  console.log(first);
  readFile("./content/second.txt", "utf8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;
    console.log(second);
    writeFile(
      "./content/result-async.txt",
      `Here is the result-async.txt : ${first} , ${second}`,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log(result);
        console.log('Done with this task');
      }
    );
  });
});
console.log('Starting the next one');