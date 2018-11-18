const calculateTimeOffset = (time, startTime) => (time - ((new Date(startTime)).getTime())) / 1000;

export const createPlaybackSequence = ({createdAt}, recordings) => recordings.map(({data, type, time}) => ({
  type,
  data,
  offset: calculateTimeOffset(time, createdAt)
}));
