export default hoverReducer = (state = 0, action) => {
  if (state.type == "isHovering") {
    return 1;
  } else {
    return 0;
  }
};

export const isHovering = () => {
  return { type: "isHovering" };
};
export const isntHovering = () => {
  return { type: "isntHovering" };
};
