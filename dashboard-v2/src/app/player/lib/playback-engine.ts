import {TimelineMax} from "gsap";
import {ScrollPlayback} from "./playback-types/scroll.playback";
import {MouseMovePlayback} from "./playback-types/mouse-move.playback";
import {ViewportResizePlayback} from "./playback-types/viewport-resize.playback";
import {NodeCreationPlayback} from "./playback-types/node-creation.playback";
import {NodeDeletionPlayback} from "./playback-types/node-deletion.playback";
import {NodeMutationPlayback} from "./playback-types/node-mutation.playback";
import {MouseClickPlayback} from "./playback-types/mouse-click.playback";
import {PlaybackWindowRef} from "../containers/player-container/player-container.component";
import {EventEmitter} from "@angular/core";
import {createMouseCursor} from "./assets/mouse-cursor";
import {InputPlayback} from "./playback-types/input.playback";

export interface PlaybackViewPortSize {
  width: number;
  height: number;
}

export class PlaybackEngine {

  private timeLine = new TimelineMax({paused: true});
  private cursorRef = createMouseCursor();
  private _viewPortChanged = new EventEmitter<PlaybackViewPortSize>();

  constructor(private windowRef: PlaybackWindowRef, private virtualDom) {
    this.virtualDom.getRootNode().appendChild(this.cursorRef);
    this.windowRef.renderDOM(this.virtualDom.getRootNode());

    window["timeline"] = this.timeLine;
  }

  set sequence(sequence) {
    const playbackTypesMap = {
      "scroll": new ScrollPlayback(this.timeLine, this.windowRef),
      "mouseMove": new MouseMovePlayback(this.timeLine, this.cursorRef),
      "click": new MouseClickPlayback(this.timeLine, this.virtualDom),
      "input": new InputPlayback(this.timeLine, this.virtualDom),
      "viewportResize": new ViewportResizePlayback(this.timeLine, this._viewPortChanged),
      "addedNode": new NodeCreationPlayback(this.timeLine, this.virtualDom),
      "removedNode": new NodeDeletionPlayback(this.timeLine, this.virtualDom),
      "mutatedNode": new NodeMutationPlayback(this.timeLine, this.virtualDom),
    };

    sequence.forEach(item => {
      const playback = playbackTypesMap[item.type];
      if (playback) playback.register(item);
    });
  }

  get viewPortChanged() {
    return this._viewPortChanged;
  }

  play() {
    this.timeLine.play();
  }

  stop() {
    this.timeLine.stop();
  }

  pause() {
  }
}
