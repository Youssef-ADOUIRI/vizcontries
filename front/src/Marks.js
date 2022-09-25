import { geoNaturalEarth1, geoPath } from "d3";
import "./Marks.css";
import { isHovering, isntHovering } from "./redux/hoverReducer";
import { useDispatch } from "react-redux";

const projection = geoNaturalEarth1();
const path = geoPath(projection);

const Marks = ({ data: { countries, interiors } }) => {
  const dispatch = useDispatch();

  return (
    <g className="marks">
      {countries.features.map((feature) => {
        if (feature.properties.name !== "Antarctica")
          return (
            <path
              key={feature.properties.name}
              className="feature_Path"
              d={path(feature)}
              onMouseEnter={() => {
                dispatch(isHovering(feature.properties.name));
              }}
              onMouseLeave={() => dispatch(isntHovering())}
            ></path>
          );
        return <path></path>;
      })}
      {/*return <path className="interior" d={path(interiors)}></path>;*/}
    </g>
  );
};

export default Marks;
