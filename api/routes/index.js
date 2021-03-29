const axios = require('axios');
const express = require("express");
const router = express.Router();
const dotenv = require("dotenv");

dotenv.config();

//TESTE DO SERVIDOR
router.get("/hello", (req, res, next) => {
    res.json({ message: 'Hello Express' });
});

module.exports = router;