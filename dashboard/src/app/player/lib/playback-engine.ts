import {TimelineMax} from "gsap";
import createCursor from "./create-cursor";
import adjustViewPortCompatibility from "./calculate-scale";
import {Recordings} from "../store/models/recordings.model";
import domTreeBuild from "./dom-tree-builder";
import {FlatDom} from "./flat-dom";

export interface PlaybackDOMRef {
  container: HTMLDivElement,
  sandboxWrapper: HTMLDivElement,
  sandbox: HTMLIFrameElement,
  section: HTMLDivElement
}

export default class PlaybackEngine {

  private playbackDOMRef: PlaybackDOMRef;
  private recordings: Recordings;
  private cursor: HTMLDivElement;
  private timeline: TimelineMax;
  private flatDom: FlatDom;


  constructor(playbackDOMRef: PlaybackDOMRef, recordings: Recordings) {
    this.playbackDOMRef = playbackDOMRef;
    this.cursor = createCursor();
    this.timeline = new TimelineMax({paused: true});
    this.recordings = recordings;
    this.flatDom = new FlatDom()
  }

  getSandboxWindow = (): Window => this.playbackDOMRef.sandbox.contentWindow.window;
  getSandboxDocument = (): Document => this.getSandboxWindow().document;
  getSandboxBody = (): any => this.getSandboxDocument().body;
  getContainer = (): HTMLDivElement => this.playbackDOMRef.container;
  getSendBoxWrapper = (): HTMLDivElement => this.playbackDOMRef.sandboxWrapper;
  getSection = (): HTMLDivElement => this.playbackDOMRef.section;


  initialize() {

    //todo:bring initial data for resolution
    adjustViewPortCompatibility(
      this.getContainer(),
      this.getSendBoxWrapper(),
      this.getSection(),
      1627,
      819
    );

    this.getSandboxDocument().write();

    this.getSandboxDocument().appendChild(
      domTreeBuild(JSON.parse(this.recordings.initialDomState).childNodes[6], (node) => {
        this.flatDom.add(node.id, node.node);
      })
    );

    this.getSandboxBody().append(this.cursor);

    this.buildPlayback();

    window.onresize = this.onResize.bind(this);
  }

  //todo: refactor conditional to polymorphism
  buildPlayback() {
    this.recordings.mutations.forEach(mutation => {
      switch (mutation.type) {

        case "mouse_move":
          this.timeline.to(this.cursor, 0, {
            top: mutation.data.y,
            left: mutation.data.x
          }, mutation.offset);
          break;

        case "view_port_change":
          ((mutation) => {

            this.timeline.addCallback(() => {
              adjustViewPortCompatibility(
                this.getContainer(),
                this.getSendBoxWrapper(),
                this.getSection(),
                mutation.data.width,
                mutation.data.height
              );
            }, mutation.offset);

          })(mutation);
          break;

        case "page_scroll":
          ((mutation) => {

            this.timeline.addCallback(() => {
              this.getSandboxWindow().scrollTo(0, mutation.data.y)
            }, mutation.offset);

          })(mutation);
          break;

        case "attributes_change":
          ((mutation) => {
            this.timeline.addCallback(() => {
              mutation.data.newAttr.map(attr => {
                const node = this.flatDom.find(mutation.data.nodeId);

                if (node && node.nodeType !== 3) {
                  node.setAttribute(attr.name, attr.value)
                }
              })
            }, mutation.offset);
          })(mutation);
          break;

        case "added_nodes":
          ((mutation) => {
            this.timeline.addCallback(() => {
              mutation.data.map(addedNode => {

                let builtNode = domTreeBuild(addedNode, (node) => {
                  this.flatDom.add(node.id, node.node);
                });

                let parent = this.flatDom.find(addedNode.parentId);

                if (addedNode.previousSibling) {
                  this.flatDom.find(addedNode.previousSibling).after(builtNode);
                } else {
                  parent.appendChild(builtNode);
                }

              })
            }, mutation.offset);
          })(mutation);
          break;
        default:
      }

    });
  }

  onResize() {
    adjustViewPortCompatibility(
      this.getContainer(),
      this.getSendBoxWrapper(),
      this.getSection(),
      parseInt(this.getSendBoxWrapper().style.width),
      parseInt(this.getSendBoxWrapper().style.height)
    );
  }

  play() {
    this.timeline.progress() === 1 ? this.timeline.gotoAndPlay(0) : this.timeline.play();
  }

  stop() {
    this.timeline.stop();
  }

  seekTo(pos) {
    this.timeline.totalProgress(pos);
  }

  onProgressChanged = (cb: (progress: number) => void) => this.timeline
    .eventCallback("onUpdate", () => cb(this.timeline.progress() * 100))

  onCompleted = (cb: () => void) => this.timeline.eventCallback("onComplete", cb)
}


