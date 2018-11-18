import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <router-outlet></router-outlet>
    <app-recorder></app-recorder>
  `
})
export class AppComponent {
  title = 'app';
}
