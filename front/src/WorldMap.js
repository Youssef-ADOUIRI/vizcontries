import React, { useState, useEffect } from "react";
import { json } from "d3";


const jsonUrl = "https://unpkg.com/world-atlas@2.0.2/countries-50m.json";

export const WorldMap = () => {
  const [data, setData] = useState(null);
  console.log(data);

  useEffect(() => {
    json(jsonUrl).then(setData);
  }, []);

  return data;
};
