import "./App.css";
import { WorldMap } from "./WorldMap";
import  Marks  from "./Marks";
import Nav from "./Nav";
import { useEffect, useState } from "react";
import axios from "axios";

const width = 960;
const height = 500;

function App() {
  const data = WorldMap();

  //fetch data from the express backend server with api
  const [coutries, setCountries] = useState([]);
  const API_ENDPOINT = "http://localhost:5000/api/countries";

  useEffect(() => {
    const asyncFunc = async () => {
      const response = await axios.get(API_ENDPOINT).catch((err) => {
        console.log("api error : " + err);
      });
      setCountries(response.data);
      console.log(response.data);
    };
    asyncFunc();
  }, []);

  //dynamic template
  let data_explore_categorie = "population";

  if (!data) {
    return <pre>Loading...</pre>;
  }
  return (
    <div className="App">
      <Nav />
      <div id="top-overlay">
        <div class="background"></div>
        <h2 id="scope" className="visible">
          This map explores {"World Data"}: it visualizes the{" "}
          {data_explore_categorie} data of diffrent countries.
          <div className="notes">
            Click map to select source country,
            <br />
            CTRL + Click to select comparision county.
          </div>
        </h2>
      </div>
      <div className="mapContainer">
        <svg width={width} height={height}>
          <Marks data={data} />
        </svg>
      </div>
    </div>
  );
}

export default App;
