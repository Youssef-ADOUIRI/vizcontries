import { geoNaturalEarth1, geoPath, geoGraticule, geoEqualEarth } from "d3";

const projection = geoEqualEarth();
const path = geoPath(projection);

export const Marks = ({ data }) => (
  <g className="marks">
    {data.features.map((feature) => {
      console.log(feature);
      return <path d={path(feature)}></path>;
    })}
  </g>
);
