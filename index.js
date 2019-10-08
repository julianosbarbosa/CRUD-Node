const express = require("express");

const server = express();
server.use(express.json());

// query params = ?/teste=1
// route params = /teste/1
// request body = {"nome": "Juliano", "email": "julianodeveloper2018@gmail.com"}
// CRUD = Create, Read, Update, Delete

const users = ["Juliano", "Nicolas", "Bruna", "Lilia"];

server.get("/users", (req, res) => {
  return res.json(users);
});

server.get("/users/:index", (req, res) => {
  const { index } = req.params;
  return res.json(users[index]);
});

server.post("/users", (req, res) => {
  const { name } = req.body;
  users.push(name);
  return res.json(users);
});

server.put("/users/:index", (req, res) => {
  const { index } = req.params;
  const { name } = req.body;
  users[index] = name;
  return res.json(users);
});

server.delete("/users/:index", (req, res) => {
  const { index } = req.params;
  users.splice(index, 1);
  return res.json(users);
});

server.listen(3000);
