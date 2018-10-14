export class MouseMovePlayback {

  constructor(private timeLine, private mouseCursorRef) {
  }

  register(mutation) {
    this.timeLine.to(this.mouseCursorRef, 0, {
      top: mutation.y,
      left: mutation.x
    }, mutation.offset)
  }

}


