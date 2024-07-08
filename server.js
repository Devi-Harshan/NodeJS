import http from "http";
const PORT = 3000;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end("Hello World");
});

server.listen(PORT, () => {
  console.log("Server running in ", PORT);
});
