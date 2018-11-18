export class MouseMovePlayback {

  constructor(private timeLine, private mouseCursorRef) {
  }

  register(mutation) {
    this.timeLine.to(this.mouseCursorRef, 0, {
      top: mutation.data.y,
      left: mutation.data.x
    }, mutation.offset)
  }

}


