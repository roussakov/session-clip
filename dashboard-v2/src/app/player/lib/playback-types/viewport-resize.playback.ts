import {ViewPortChange} from "../../../../../../dashboard/src/app/player/store/models/mutation.model";
import {EventEmitter} from "@angular/core";

export class ViewportResizePlayback {

  constructor(private timeLine, private viewPortChanged: EventEmitter<ViewPortChange>) {
  }

  register(mutation) {
    this.timeLine.addCallback(() => {
      this.viewPortChanged.emit({
        width: mutation.width,
        height: mutation.height
      })
    }, mutation.offset);
  }

}
