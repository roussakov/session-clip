export default function createCursor():HTMLDivElement {
  const div = document.createElement("div");
  div.style.width = "20px";
  div.style.backgroundImage = "url('/assets/images/cursor.svg')";
  div.style.height = "20px";
  div.style.left = "0px";
  div.style.top = "0px";
  div.style.zIndex = "99999999";
  div.style.position = "absolute";
  div.style.backgroundSize = "cover";

  return div;
}
