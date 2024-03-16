const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req);

  if (req.url === "/") {
    res.end("Welcome to our home page");
  }

  if (req.url === "/about") {
    res.end("Here is our short story");
  }

  res.end(`
    <h1>Oops!</h1>
    <p>We can't seem to find what you are looking for</p>
    <a href='/'>back to home</a>
  `);
});

server.listen(5000);
