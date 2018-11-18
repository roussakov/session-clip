import {Component, EventEmitter, ViewChild} from '@angular/core';
import {createPlayer, Player} from "../../lib/player";

//temp class name, need to define terminology
export class IFrameWrapper {

  constructor(private el) {
  }

  set width(width: number) {
    this.el.style.width = `${width}px`;
  }

  set height(height: number) {
    this.el.style.height = `${height}px`;
  }

  get width() {
    return parseFloat(this.el.style.width);
  }

  get height() {
    return parseFloat(this.el.style.height);
  }

}

export class PlaybackWindowRef {

  constructor(private _nativeBrowserWindow) {
  }

  renderDOM(dom) {
    this.nativeBrowserWindow.document.replaceChild(dom, this.nativeBrowserWindow.document.children[0]);
  }

  get nativeBrowserWindow() {
    return this._nativeBrowserWindow;
  }

}

export class PlayerElement {

  constructor(private el) {

  }

  get width() {
    return this.el.offsetWidth;
  }

  get height() {
    return this.el.offsetHeight;
  }
}

export class PlaybackContainerElement {

  constructor(private el) {
  }

  set left(offset) {
    this.el.style.marginLeft = `${offset}px`;
  }

  set top(offset) {
    this.el.style.marginTop = `${offset}px`;
  }

  set scale(scale) {
    this.el.style.transform = `scale(${scale})`;
  }
}

@Component({
  selector: 'app-player-container',
  templateUrl: './player-container.component.html',
  styleUrls: ['./player-container.component.css'],
})
export class PlayerContainerComponent {

  private player: Player;

  public playerProgress: EventEmitter<number>;

  @ViewChild("iFrameWrapper") iFrameWrapper;
  @ViewChild("iFrameRef") iFrameRef;
  @ViewChild("playerElement") playerElement;
  @ViewChild("playbackContainerElement") playbackContainerElement;

  playClickHandler() {
    this.player.play();
  }

  stopClickHandler() {
    this.player.stop();
  }

  setPlayerData(DOMState, recordings, sessionMetadata) {
    this.player = createPlayer(
      sessionMetadata,
      DOMState,
      recordings,
      new PlaybackWindowRef(this.iFrameRef.nativeElement.contentWindow.window),
      new IFrameWrapper(this.iFrameWrapper.nativeElement),
      new PlayerElement(this.playerElement.nativeElement),
      new PlaybackContainerElement(this.playbackContainerElement.nativeElement),
    );

    this.playerProgress = this.player.currentTime;
  }

}
