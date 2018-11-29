import {EventEmitter} from "@angular/core";

export class ViewportResizePlayback {

  constructor(private timeLine, private viewPortChanged: EventEmitter<any>) {
  }

  register(mutation) {
    this.timeLine.addCallback(() => {
      this.viewPortChanged.emit({
        width: mutation.data.width,
        height: mutation.data.height
      })
    }, mutation.offset);
  }

}
