/** A script to get data from the WorldBank API */

import axios from "axios";

/** 
app.get("/", async (req, res) => {
  url = "https://api.worldbank.org/v2/en/country/bra/indicator/SP.POP.TOTL?format=json";
  fetch(url)
    .then((res) => res.json())
    .then((resj) => console.log(resj))
    .catch((e) => console.error("error: " + e));

  try {
    let response = await fetch(url);
    response = await response.json();
    res.status(200).json(response);
  } catch (err) {
    console.log(erro);
    res.status(500).json({ msg: `Internal Server Error.` });
  }
  return res.send("Received a GET HTTP method");
});
*/

export const getCountryInd = async (countryID , indicator) => {
  const url = `https://api.worldbank.org/v2/en/country/${countryID}/indicator/${indicator}?format=json`;
  let result = await axios.get(url).catch((e) => console.error("error: " + e));
  return await result;
};
