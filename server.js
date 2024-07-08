import http from "http";
const PORT = 3000;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World");
});

server.listen(PORT, () => {
  console.log("Server running in ", PORT);
});

// import http from "http";

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader("Content-Type", "text/plain");
//   res.end("Hello World\n");
// });

// const PORT = 3000;
// server.listen(PORT, () => {
//   console.log(`Server running at http://localhost:${PORT}/`);
// });
