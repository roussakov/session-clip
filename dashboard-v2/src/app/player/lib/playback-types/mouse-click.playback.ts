import {createMouseClickMarker} from "../assets/mouse-click-marker";

export class MouseClickPlayback {

  constructor(private timeLine, private virtualDom) {
  }

  register(mutation) {
    this.timeLine.addCallback(() => {
      this.virtualDom.getRootNode().appendChild(createMouseClickMarker(mutation.x, mutation.y));
    }, mutation.offset);
  }

}


