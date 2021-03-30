const axios = require("axios");
const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();
app.use(express.json());
app.use(cors());

const Lead = require("./models/lead");

//TESTE DO SERVIDOR
app.get("/hello", (request, response) => {
    response.json({ message: 'Hello, Kampana-Hub!' })
});

app.post("/leads", async (req, res, next) => {
  const lead = req.body.leads[0];

  const obj = {
    rd_id: lead.id,
    name: lead.name,
    email: lead.email,
    personal_phone: lead.personal_phone
  }

  try {
    const query = { rd_id: lead.id };
    const upsert_lead = await Lead.findOneAndUpdate(query, obj);

    console.log("Upsert Lead successfully");
    return res.send({ upsert_lead });
  } catch(err) {
    console.log(err);

    return res.status(400).send({ error: "Upsert lead failed" });
  }

});

app.listen(process.env.PORT || 3000, () => {
    console.log("Connected server!");
});