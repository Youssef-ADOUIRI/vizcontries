/** this script is a module to orgnize data before adding it to db */
import axios from "axios";
import * as worldbank from "./worldbankAPI.js";
import fs from "fs";

// get all the countries in the world
export const getAllCountries = async () => {
  const url = "https://restcountries.com/v3.1/all";
  const all = await axios.get(url).then((res) => res.data);
  console.log(all[0]["name"]);
  const all_countries_names = [];
  for (const obj of all) {
    all_countries_names.push({ id: obj["cca2"], name: obj["name"] });
  }
  //update the json file
  const JSONToFile = (obj, filename) =>
    fs.writeFileSync(`${filename}.json`, JSON.stringify(obj, null, 2));
  JSONToFile(all_countries_names, "all_countries");
  return all_countries_names;
};

//function to get all the population for all the countries
export const populationPerCountry = () => {
  worldbank.getCountryPopulation();
};
