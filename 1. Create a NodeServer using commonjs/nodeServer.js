const http = require("http");

const server = http.createServer((req, res) => {
  // console.log(req.url);
  // res.end("Hello World..");
  if (req.url === "/home") {
    res.end("This is Home Page....");
  } else if (req.url === "/about") {
    res.end("This is About Page");
  } else if (req.url === "/name") {
    res.end("Harshikesh Kumar");
  } else {
    res.end("Kuchh bhi bhai....");
  }
});

server.listen(3000, () => {
  console.log("Server is Running at localhost:3000");
});
