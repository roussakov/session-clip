import {Component, HostListener, Input} from '@angular/core';
import {buildVirtualDOM} from "../../lib/virtual-dom-builder/virtual-dom-builder";
import {Session} from "../../../sessions/services/session.service";

@Component({
  selector: 'app-player-container',
  templateUrl: './player-container.component.html',
  styleUrls: ['./player-container.component.css'],
})
export class PlayerContainerComponent {

  public virtualDOM;
  public width: number;
  public height: number;

  @Input()
  set initialNodes(initialNodes) {
    if (initialNodes) {
      this.virtualDOM = buildVirtualDOM(initialNodes).getRoot();
    }
  };

  @Input()
  set session(session: Session) {
    if (session) {
      console.log(session);
      this.width = session.userInfo.width;
      this.height = session.userInfo.height;
    }
  }

  @Input()
  set recordings(recordings) {
    if (recordings) {
      console.log(recordings);
    }
  };



}

