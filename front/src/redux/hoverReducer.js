const hoverReducer = (state, action) => {
  if (action.type === "isHovering") {
    return { isHovering: true, country: action.payload };
  } else {
    return { isHovering: false, country: "" };
  }
};

export const isHovering = (data) => {
  return { type: "isHovering", payload: data };
};
export const isntHovering = () => {
  return { type: "isntHovering", payload: "" };
};

export default hoverReducer;
