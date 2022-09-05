import { geoNaturalEarth1, geoPath } from "d3";
import "./Marks.css";
import { useState } from "react";

const projection = geoNaturalEarth1();
const path = geoPath(projection);

const Marks = ({ data: { countries, interiors } }) => {
  const [isShown, setIsShown] = useState(false);

  return (
    <g className="marks">
      {countries.features.map((feature) => {
        if (feature.properties.name !== "Antarctica")
          return (
            <path
              className="feature"
              d={path(feature)}
              onMouseEnter={() => setIsShown(true)}
              onMouseLeave={() => setIsShown(false)}
            ></path>
          );
        return <path></path>;
      })}
      {/*return <path className="interior" d={path(interiors)}></path>;*/}
    </g>
  );
};

export default Marks;
