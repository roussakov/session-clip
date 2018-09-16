import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-session-item',
  templateUrl: './session-item.component.html',
  styleUrls: ['./session-item.component.css']
})
export class SessionItemComponent implements OnInit {

  @Input() id: string;
  @Input() createdAt: string;

  constructor() { }

  ngOnInit() {
  }

}
