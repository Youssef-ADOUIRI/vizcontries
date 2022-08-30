import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import cors from 'cors';
import exports from './database/DB.js';
import getCountryPopulation from './utils/worldbankAPI.js';

const app = express();
const PORT = 8181;

mongoose.connect(exports.DB).then(
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

app.get("/", (req, res) => {
  console.log("You have reached this API");
  res_json = getCountryPopulation('bra');
  res.send(res_json);
});

app.listen(PORT, function () {
  console.log("Server is running on Port: ", PORT);
});
