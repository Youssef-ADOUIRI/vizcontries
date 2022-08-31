/** this script is a module to orgnize data before adding it to db */
import axios from "axios";
import * as worldbank from "./worldbankAPI.js";
import fs from "fs";
import e from "express";

// get all the countries in the world , to be redefined for the data from the map in UI
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
    fs.writeFileSync(`utils/${filename}.json`, JSON.stringify(obj, null, 2));
  JSONToFile(all_countries_names, "all_countries");
  return all_countries_names;
};

//function to get all the population for all the countries
export const populationPerCountry = async () => {
  const allCjson = JSON.parse(fs.readFileSync("./utils/all_countries.json"));
  console.log(allCjson);
  for (const ob of allCjson) {
    const pp = await worldbank.getCountryInd(ob["id"], "SP.POP.TOTL");
    const gdp = await worldbank
      .getCountryInd(ob["id"], "NY.GDP.MKTP.CD")
      .catch((e) => {
        console.error(e);
      });
    try {
      const val_pp = pp.data[1][0]["value"];
      const val_gdp = gdp.data[1][0]["value"];

      let countryData = {
        _id: ob["id"],
        name: ob["name"]["common"],
        available: true,
        population: val_pp,
        gdp: val_gdp,
      };
      console.log(countryData);
    } catch (error) {
        console.error(error);
        let countryData = {
            _id: ob["id"],
            name: ob["name"]["common"],
            available: false,
            population: 0,
            gdp: 0,
          };
    }
  }
};
