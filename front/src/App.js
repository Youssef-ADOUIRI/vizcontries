import "./App.css";
import { json } from "d3";
import { WorldMap } from "./WorldMap";

function App() {
  const data = WorldMap();

  if (!data) {
    return <pre>Loading...</pre>;
  }
  return (
    <div className="App">

    </div>
  );
}

export default App;
