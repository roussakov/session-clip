import {EventEmitter} from "@angular/core";
import {PlaybackEngine, PlaybackViewPortSize} from "./playback-engine";
import {createVirtualDOM} from "./virtual-dom/virtual-dom";
import {
  IFrameWrapper, PlaybackContainerElement,
  PlaybackWindowRef,
  PlayerElement
} from "../containers/player-container/player-container.component";
import {calculateScale} from "./utils/calculate-scale";
import {createPlaybackSequence} from "./playback-sequence";
import {createMouseCursor} from "./assets/mouse-cursor";

export type CurrentTime = number;

export interface PlayerOptions {
  width: number,
  height: number
}

export class Player {

  private _currentTime: EventEmitter<CurrentTime> = new EventEmitter<CurrentTime>();
  private _totalTime: number;

  constructor(
    private options: PlayerOptions,
    private iframeWrapper: IFrameWrapper,
    private playerEl: PlayerElement,
    private playbackContainerEl: PlaybackContainerElement,
    private playbackEngine: PlaybackEngine

  ) {
    this.iframeWrapper.width = options.width;
    this.iframeWrapper.height = options.height;

    this.playbackEngine.onFrameUpdate.subscribe(progress => this._currentTime.emit(progress));

    this.playbackEngine.viewPortChanged.subscribe((viewPortSize: PlaybackViewPortSize) => {

      this.iframeWrapper.width = viewPortSize.width;
      this.iframeWrapper.height = viewPortSize.height;

      this.keepResponsive();
    });
  }

  private keepResponsive() {
    const sectionWidth = this.playerEl.width,
      sectionHeight = this.playerEl.height;

    const scale = calculateScale(
      sectionWidth,
      sectionHeight,
      this.iframeWrapper.width,
      this.iframeWrapper.height
    );


    const marginLeft = (sectionWidth - this.iframeWrapper.width * scale) / 2;
    const marginTop = (sectionHeight - this.iframeWrapper.height * scale) / 2;

    this.playbackContainerEl.left = marginLeft;
    this.playbackContainerEl.top = marginTop;

    this.playbackContainerEl.scale = scale;

  }

  get currentTime(): EventEmitter<CurrentTime> {
    return this._currentTime;
  }

  get totalTime(): number {
    return this._totalTime;
  }

  play() {
    this.playbackEngine.play();
  }

  stop() {
    this.playbackEngine.stop();
  }

  pause() {
    this.playbackEngine.pause();
  }

}

export const createPlayer = (
  playbackMetadata,
  DOMState,
  recordings,
  windowRef: PlaybackWindowRef,
  iframeWrapper: IFrameWrapper,
  playerElement: PlayerElement,
  playbackContainerElement: PlaybackContainerElement) => {
  //build virtual dom based on DOM snapshot
  const virtualDOM = createVirtualDOM(DOMState, playbackMetadata.userInfo.origin);
  const mouseCursor = createMouseCursor(playbackMetadata.platform.os);

  const playbackEngine = new PlaybackEngine(windowRef, virtualDOM, mouseCursor);
  playbackEngine.sequence = createPlaybackSequence(playbackMetadata, recordings);

  const options = {
    width: playbackMetadata.userInfo.width,
    height: playbackMetadata.userInfo.height
  };

  return new Player(options, iframeWrapper, playerElement, playbackContainerElement, playbackEngine);
};
