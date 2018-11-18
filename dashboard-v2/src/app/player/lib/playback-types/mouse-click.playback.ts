import {createMouseClickMarker} from "../assets/mouse-click-marker";

export class MouseClickPlayback {

  constructor(private timeLine, private virtualDom) {
  }

  register(mutation) {
    this.timeLine.addCallback(() => {
      this.virtualDom.getRootNode().appendChild(createMouseClickMarker(mutation.data.x, mutation.data.y));
    }, mutation.offset);
  }

}


