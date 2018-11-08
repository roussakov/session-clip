import {PlaybackWindowRef} from "../../containers/player-container/player-container.component";


export class InnerScrollPlayback {

  constructor(private timeLine, private windowRef: PlaybackWindowRef, private virtualDom) {
  }

  register(mutation) {
    this.timeLine.addCallback(() => {

      this.virtualDom.findNode(mutation.nodeId)
        .scrollTo(mutation.x, mutation.y);

    }, mutation.offset);
  }

}
