import { geoNaturalEarth1, geoPath } from "d3";
import "./Marks.css";
import { useState } from "react";
import { increment, decrement } from "./redux/hoverReducer";
import { useDispatch } from "react-redux";


const projection = geoNaturalEarth1();
const path = geoPath(projection);

const Marks = ({ data: { countries, interiors } }) => {
  const [isShown, setIsShown] = useState(false);
  const dispatch = useDispatch()

  return (
    <g className="marks">
      {countries.features.map((feature) => {
        if (feature.properties.name !== "Antarctica")
          return (
            <path
              className="feature"
              d={path(feature)}
              onMouseEnter={() => dispatch(increment())}
              onMouseLeave={() => dispatch(decrement())}
            ></path>
          );
        return <path></path>;
      })}
      {/*return <path className="interior" d={path(interiors)}></path>;*/}
    </g>
  );
};

export default Marks;
