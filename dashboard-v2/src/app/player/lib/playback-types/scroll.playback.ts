import {PlaybackWindowRef} from "../../containers/player-container/player-container.component";


export class ScrollPlayback {

  constructor(private timeLine, private windowRef: PlaybackWindowRef) {
  }

  register(mutation) {
    this.timeLine.addCallback(() => {
      this.windowRef.nativeBrowserWindow.scrollTo(mutation.x, mutation.y)
    }, mutation.offset);
  }

}
