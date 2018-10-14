export const buildPlaybackSequence = (playbackMetadata, recordings) => {
  return recordings.map(record => (
    Object.assign({}, record.data,
      {offset: (record.data.time - ((new Date(playbackMetadata.createdAt)).getTime())) / 1000}
    )));
};
