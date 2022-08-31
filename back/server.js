import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import DB from "./database/DB.js";
import getCountryPopulation from "./utils/worldbankAPI.js";

const app = express();
const PORT = 5000;

mongoose.connect(DB).then(
  () => {
    console.log("Database is connected");
  },
  (err) => {
    console.log("Can not connect to the database" + err);
  }
);

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", async (req, res) => {
  console.log("You have reached this API");
  const res_json = await getCountryPopulation("bra");
  console.log(res_json)
  res.send(res_json);
});

app.listen(PORT, function () {
  console.log("Server is running on Port: ", PORT);
});
