import "./App.css";
import { json } from "d3";
import { WorldMap } from "./WorldMap";
import { Marks } from './Marks';

const width = 960;
const height = 500;


function App() {
  const data = WorldMap();

  if (!data) {
    return <pre>Loading...</pre>;
  }
  return (
    <div className="App">
      <svg width={width} height={height}>
        <Marks data={data} />
      </svg>
    </div>
  );
}

export default App;
