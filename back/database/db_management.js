//inset in
import * as dotenv from "dotenv";
dotenv.config();

import mongoose from "mongoose";

export let myclient = mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(
    () => {
      console.log("Database is connected");
    },
    (err) => {
      console.log("Cannot connect to the database : " + err);
    }
  );

export const Schema = {
  Id: {
    type: String,
    required: true,
  },
  Name: String,
  Available: {
    type: Boolean,
    required: true,
  },
  Population: Number,
  GDP: Number,
  GDP_Capita: Number,
  CO2_emi: Number,
  birth_rate: Number,
  patent_app: Number,
};

export const countries_schema = new mongoose.Schema(Schema);
export const Countries = mongoose.model("countries", countries_schema);

export const addtodb = (obj) => {
  //insert in and save
  if (obj == null) {
    console.log("The object is undefined");
    return null;
  }
  const coutry = new Countries(obj);
  coutry
    .save()
    .then(() => console.log("One entry added"))
    .catch((e) => console.error(e));
  return coutry;
};
