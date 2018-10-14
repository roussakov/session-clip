export const createMouseCursor = () => {
  const div = document.createElement("div");
  div.style.width = "20px";
  div.style.backgroundImage = "url('/assets/images/player/cursor.svg')";
  div.style.height = "20px";
  div.style.left = "0px";
  div.style.top = "0px";
  div.style.zIndex = "2147483647";
  div.style.position = "absolute";
  div.style.backgroundSize = "cover";

  return div;
};
