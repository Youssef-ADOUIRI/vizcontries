import { useState, useEffect } from "react";
import { json } from "d3";
import { feature , mesh } from "topojson";

const jsonUrl = "https://unpkg.com/world-atlas@2.0.2/countries-50m.json";

export const WorldMap = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    json(jsonUrl).then((topojsonData) => {
      const { countries } = topojsonData.objects;
      setData({
        countries: feature(topojsonData, countries),
        interiors: mesh(topojsonData, countries, (a, b) => a !== b)
      });
    });
  }, []);

  return data;
};
