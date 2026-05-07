import http from "http";

const server = http.createServer((req, res) => {
  console.log(req.url);

  if (req.url === "/home") {
    res.end("Home Page...");
  } else if (req.url === "/about") {
    res.end("About Page...");
  } else if (req.url === "/name") {
    res.end("Harshikesh Kumar");
  } else {
    res.end("Kuchh Bhi.......");
  }
});

server.listen(3000, () => {
  console.log("Server Is Running at localhost:3000");
});
