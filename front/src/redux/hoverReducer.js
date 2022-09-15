const hoverReducer = (state = 0, action) => {
  if (state.type == "isHovering") {
    return 1;
  } else {
    return 0;
  }
};

export const isHovering = (data) => {
  return { type: "isHovering", payload: data };
};
export const isntHovering = () => {
  return { type: "isntHovering", payload: "" };
};

export default hoverReducer;
