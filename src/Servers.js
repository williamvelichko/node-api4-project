const express = require("express");

const { validateRegistration } = require("./middleware");

require("dotenv").config();
const server = express();

const user = require("./UsersModel");

server.use(express.json());

server.get("/api/users", (req, res) => {
  user.get().then((users) => {
    res.status(200).json(users);
  });
});

server.post("/api/register", validateRegistration, (req, res) => {
  user.register(req.body).then((newUser) => {
    res.status(200).json(newUser);
  });
  //console.log(req.body);
});

server.post("/api/login", (req, res) => {
  user.login(req.body);
});

server.use("/", (req, res) => {
  res.send("its working shuga");
});
module.exports = server;
