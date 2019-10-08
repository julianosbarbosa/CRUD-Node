const express = require("express");

const server = express();

// query params = ?/teste=1
// route params = /teste/1
// request body = {"nome": "Juliano", "email": "julianodeveloper2018@gmail.com"}

server.get("/teste", (req, res) => {
  const nome = req.query.nome;
  return res.json({ text: `Ola ${nome}` });
});

server.listen(3000);
