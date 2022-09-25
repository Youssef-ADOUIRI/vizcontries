import React from "react";
import "./Fiche.css";
import { useSelector } from "react-redux";

function Fiche() {
  const selection = useSelector((state) => state.hoverReducer);
  return (
    <div className="fiche">
      <div>{selection.isHovering ? selection.country : 0}</div>
    </div>
  );
}

export default Fiche;
