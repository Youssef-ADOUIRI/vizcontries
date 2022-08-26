import "./App.css";
import { json } from "d3";
import { WorldMap } from "./WorldMap";
import { Marks } from "./Marks";

const width = 960;
const height = 500;

function App() {
  const data = WorldMap();
  let data_explore_categorie = 'World Data'

  if (!data) {
    return <pre>Loading...</pre>;
  }
  return (
    <div className="App">
      <div id="top-overlay">
        <div class="background"></div>
        <h2 id="scope" className="visible">
          This map explores {data_explore_categorie}: it visualizes the data of diffrent countries.
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
