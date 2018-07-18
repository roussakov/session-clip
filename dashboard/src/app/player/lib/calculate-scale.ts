function calculateScale(vpWidth, vpHeight, width, height): number {
  return Math.min(vpWidth / width, vpHeight / height);
}

export default function adjustViewPortCompatibility(playbackContainerEl,
                                                    frameWrapper,
                                                    playbackSection,
                                                    width: number,
                                                    height: number) {

  const sectionWidth = playbackSection.offsetWidth - 30,
    sectionHeight = playbackSection.offsetHeight - 30;

  const scale = calculateScale(
    sectionWidth,
    sectionHeight,
    width,
    height
  );

  frameWrapper.style.width = `${width}px`;
  frameWrapper.style.height = `${height}px`;

  const marginLeft = (sectionWidth - width * scale) / 2;
  const marginTop = (sectionHeight - height * scale) / 2;
  playbackContainerEl.style.marginLeft = `${marginLeft + 15}px`;
  playbackContainerEl.style.marginTop = `${marginTop + 15   }px`;

  playbackContainerEl.style.transform = `scale(${scale})`;
}
