export const calculateScale = (vpWidth, vpHeight, width, height): number  => {
  return Math.min(vpWidth / width, vpHeight / height);
};
