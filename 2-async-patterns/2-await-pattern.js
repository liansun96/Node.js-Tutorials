const { readFile, writeFile } = require("fs").promises;
// const util = require("util");
// const readFilePormise = util.promisify(readFile);
// const writeFilePormise = util.promisify(writeFile);

const start = async () => {
  try {
    const first = await readFile("./content/first.txt", "utf8");
    const second = await readFile("./content/second.txt", "utf8");
    console.log(first, second);
    writeFile(
      "./content/result-mind-grenade.txt",
      `This shit is cool : ${first} , ${second}`,
      { flag: "a" }
    );
  } catch (error) {
    console.error(error);
  }
};

start();

// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, "utf8", (err, data) => {
//       if (err) {
//         reject(err);
//         return;
//       }
//       resolve(data);
//     });
//   });
// };

// getText("./content/first.txt")
//   .then((data) => console.log(data))
//   .catch((err) => console.error(err));
