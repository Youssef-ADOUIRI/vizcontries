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

app.get("/refreach", async (req, res) => {
  console.log("You have reached this API with " + req.query);

  //const obj = addtodb({ Id: "ggd", Name: "gorlj", Available: true , GDP : 12});
  // Countries.find({}, (err, found) => {
  //   if (!err) {
  //     res.send(found);
  //   }
  //   console.log(err);
  //   res.send("Some error occured!");
  // }).catch((err) => console.log("Error occured, " + err));

});

app.listen(PORT, function () {
  console.log("Server is running on Port: ", PORT);
});
