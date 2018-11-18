import {PlaybackWindowRef} from "../../containers/player-container/player-container.component";


export class InnerScrollPlayback {

  constructor(private timeLine, private windowRef: PlaybackWindowRef, private virtualDom) {
  }

  register(mutation) {
    this.timeLine.addCallback(() => {

      this.virtualDom.findNode(mutation.data.nodeId)
        .scrollTo(mutation.data.x, mutation.data.y);

    }, mutation.offset);
  }

}
