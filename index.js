const express = require("express");

const server = express();

// query params = ?/teste=1
// route params = /teste/1
// request body = {"nome": "Juliano", "email": "julianodeveloper2018@gmail.com"}

const users = ["Juliano", "Nicolas", "Bruna", "Lilia"];

server.get("/users/:index", (req, res) => {
  const { index } = req.params;
  return res.json(users[index]);
});

server.listen(3000);
