import {PlaybackWindowRef} from "../../containers/player-container/player-container.component";

export class WindowScrollPlayback {

  constructor(private timeLine, private windowRef: PlaybackWindowRef) {
  }

  register(mutation) {
    this.timeLine.addCallback(() => {
      this.windowRef.nativeBrowserWindow.scrollTo(mutation.data.x, mutation.data.y)
    }, mutation.offset);
  }

}
