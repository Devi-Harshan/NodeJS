import { createServer } from "http";

const PORT = process.env.PORT;
const users = [
  {
    id: 1,
    name: "John",
  },
  {
    id: 2,
    name: "David",
  },
  {
    id: 3,
    name: "Jay",
  },
];

//Logger middleware
const logger = (req, res, next) => {
  console.log("REs", req.method);
  next();
};

//JSON middleware
const jsonMiddleware = (req, res, next) => {
  res.setHeader("Content-Type", "application/json");
  next();
};

//RouteHandler for/api/users
const getUsersHandler = (req, res) => {
  res.write(JSON.stringify(users));
  res.end();
};

//RouteHandler for/api/users/id
const getUsersByIdHandler = (req, res) => {
  const id = req.url.split("/")[3];
  const user = users.find((user) => user.id === parseInt(id));
  if (user) {
    res.setHeader("Content-Type", "application/json");
    res.write(JSON.stringify(user));
    res.end();
  }
};

//RouteHandler for/api/users for POST Method

const createUserHandler = (req, res) => {
  let body = "";
  //Listen for data
  req.on("data", (chunk) => {
    body += chunk.toString();
  });
  req.on("end", () => {
    const newUser = JSON.parse(body);
    users.push(newUser);
    res.statusCode = 201;
    res.write(JSON.stringify(newUser));
    res.end();
  });
};
//Notfound Handler
const notFoundHandler = (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.statusCode = 404;
  res.write(JSON.stringify({ message: "Error Occurred" }));
  res.end();
};
const server = createServer((req, res) => {
  logger(req, res, () => {
    jsonMiddleware(req, res, () => {
      if (req.url === "/api/users" && req.method === "GET") {
        getUsersHandler(req, res);
      } else if (
        req.url.match(/\/api\/users\/([0-9]+)/) &&
        req.method === "GET"
      ) {
        getUsersByIdHandler(req, res);
      } else if (req.url === "/api/users" && req.method === "POST") {
        createUserHandler(req, res);
      } else {
        notFoundHandler(req, res);
      }
    });
    /*  if (req.url === "/api/users" && req.method === "GET") {
      res.setHeader("Content-Type", "application/json");
      res.write(JSON.stringify(users));
      res.end();
    } else if (
      req.url.match(/\/api\/users\/([0-9]+)/) &&
      req.method === "GET"
    ) {
      const id = req.url.split("/")[3];
      const user = users.find((user) => user.id === parseInt(id));
      if (user) {
        res.setHeader("Content-Type", "application/json");
        res.write(JSON.stringify(user));
        res.end();
      } else {
        res.setHeader("Content-Type", "application/json");
        res.statusCode = 404;
        res.write(JSON.stringify({ message: "Error Occurred" }));
        res.end();
      }
    } else {
      res.setHeader("Content-Type", "application/json");
      res.statusCode = 404;
      res.write(JSON.stringify({ message: "Error Occurred" }));
      res.end();
    } */
  });
});
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
