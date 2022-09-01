import { myclient, addtodb, Countries } from "./database/db_management.js";
import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import { populationPerCountry } from "./utils/orgnize_req.js";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/api/countries", async (req, res) => {
  console.log("You have reached this API with " + req.query);

  //const obj = addtodb({ Id: "ggd", Name: "gorlj", Available: true , GDP : 12});
  const countries_array = await Countries.find().catch((err) => console.log("Error occured, " + err));
  res.json(countries_array)
});

app.listen(PORT, function () {
  console.log("Server is running on Port: ", PORT);
});
