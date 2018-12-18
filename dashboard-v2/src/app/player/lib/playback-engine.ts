import {TimelineMax} from "gsap";
import {WindowScrollPlayback} from "./playback-types/window-scroll.playback";
import {MouseMovePlayback} from "./playback-types/mouse-move.playback";
import {ViewportResizePlayback} from "./playback-types/viewport-resize.playback";
import {NodeCreationPlayback} from "./playback-types/node-creation.playback";
import {NodeDeletionPlayback} from "./playback-types/node-deletion.playback";
import {NodeMutationPlayback} from "./playback-types/node-mutation.playback";
import {MouseClickPlayback} from "./playback-types/mouse-click.playback";
import {PlaybackWindowRef} from "../containers/player-container/player-container.component";
import {EventEmitter} from "@angular/core";
import {InputPlayback} from "./playback-types/input.playback";
import {InnerScrollPlayback} from "./playback-types/inner-scroll.playback";

export interface PlaybackViewPortSize {
  width: number;
  height: number;
}

export class PlaybackEngine {
  readonly timeLine: TimelineMax;
  private _viewPortChanged = new EventEmitter<PlaybackViewPortSize>();
  private _onFrameUpdate: EventEmitter<number> = new EventEmitter<number>();

  constructor(private windowRef: PlaybackWindowRef, private virtualDom, private mouseCursor) {
    this.timeLine = new TimelineMax({paused: true, onUpdate: this.onUpdateHandler.bind(this)});

    this.virtualDom.getRootNode().appendChild(this.mouseCursor);
    this.windowRef.renderDOM(this.virtualDom.getRootNode());

    window["timeline"] = this.timeLine;
  }

  private onUpdateHandler() {
    this._onFrameUpdate.emit(
      this.timeLine.progress()
    );
  }

  get onFrameUpdate() {
    return this._onFrameUpdate;
  }

  set sequence(sequence) {
    const playbackTypesMap = {
      "innerScroll": new InnerScrollPlayback(this.timeLine, this.windowRef, this.virtualDom),
      "windowScroll": new WindowScrollPlayback(this.timeLine, this.windowRef),
      "mouseMove": new MouseMovePlayback(this.timeLine, this.mouseCursor),
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
