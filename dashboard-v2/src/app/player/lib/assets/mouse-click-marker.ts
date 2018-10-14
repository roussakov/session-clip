export const createMouseClickMarker = (x, y) => {
  const div = document.createElement("div");
  div.style.width = "5px";
  div.style.height = "5px";
  div.style.borderRadius = "5px";
  div.style.left = `${x}px`;
  div.style.top = `${y}px`;
  div.style.zIndex = "999";
  div.style.position = "absolute";
  div.style.backgroundColor = "#FF0000";

  return div;
};
