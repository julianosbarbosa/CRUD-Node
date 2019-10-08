const express = require("express");

const server = express();
server.use(express.json());

// query params = ?/teste=1
// route params = /teste/1
// request body = {"nome": "Juliano", "email": "julianodeveloper2018@gmail.com"}
// CRUD = Create, Read, Update, Delete

const users = ["Juliano", "Nicolas", "Bruna", "Lilia"];

server.use((req, res, next) => {
  console.log(`O metodo ${req.method} da url ${req.url} foi execultado`);
  return next();
});

const checkUsersExists = (req, res, next) => {
  if (!req.body.name) {
    return res.status(400).json({ error: "nome de usuario é obrigatorio" });
  }
  return next();
};

const checkUserInArray = (req, res, next) => {
  const user = users[req.params.index];
  if (!user) {
    return res.status(400).json({ error: "usuario nao encontrado" });
  }
  req.user = user;
  return next();
};

server.get("/users", (req, res) => {
  return res.json(users);
});

server.get("/users/:index", checkUserInArray, (req, res) => {
  const { index } = req.params;
  return res.json(req.user);
});

server.post("/users", checkUsersExists, (req, res) => {
  const { name } = req.body;
  users.push(name);
  return res.json(users);
});

server.put("/users/:index", checkUsersExists, checkUserInArray, (req, res) => {
  const { index } = req.params;
  const { name } = req.body;
  users[index] = name;
  return res.json(users);
});

server.delete("/users/:index", checkUserInArray, (req, res) => {
  const { index } = req.params;
  users.splice(index, 1);
  return res.json(users);
});

server.listen(3000);
