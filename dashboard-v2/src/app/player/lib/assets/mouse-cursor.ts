export const createMouseCursor = (osType) => {
  const div = document.createElement("div");
  div.style.width = "20px";
  div.style.backgroundImage = ((osType.includes('Mac')) ? "url('/assets/images/player/mouse_mac.png')" : "url('/assets/images/player/mouse_windows.png')");
  div.style.height = "20px";
  div.style.left = "0px";
  div.style.top = "0px";
  div.style.zIndex = "2147483647";
  div.style.position = "absolute";
  div.style.backgroundSize = "cover";

  return div;
};
