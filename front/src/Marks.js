import { geoNaturalEarth1, geoPath, geoGraticule } from "d3";
import "./Marks.css";

const projection = geoNaturalEarth1();
const path = geoPath(projection);

export const Marks = ({ data: { countries, interiors } }) => (
  <g className="marks">
    {countries.features.map((feature) => {
        if(feature.properties.name !== "Antarctica")
            return <path className="feature" d={path(feature)}></path>;
        return <path></path>

    })}
    {/*return <path className="interior" d={path(interiors)}></path>;*/}
  </g>
);
