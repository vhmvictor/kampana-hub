const axios = require('axios');
const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();
app.use(express.json());
app.use(cors());

//TESTE DO SERVIDOR
app.get("/hello", (request, response) => {
    response.json({ message: 'Hello, Kampana-Hub!' })
});
//
app.post("/leads", async (req, res, next) => {
  console.log(req.body);
  return res.status(200).send('Ok');
});
//
app.listen(process.env.PORT || 3000, () => {
    console.log("Servidor iniciado!");
});