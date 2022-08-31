import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import DB from "./database/DB.js";
import{ getAllCountries }from "./utils/orgnize_req.js";

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

app.get("/refreach", async(req, res) => {
  console.log("You have reached this API with" + req);
  const cc = await getAllCountries()
  res.send( cc )
  console.log( cc )
});

app.listen(PORT, function () {
  console.log("Server is running on Port: ", PORT);
});
