import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { PagesModule } from './pages/pages.module';
import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RecorderComponent } from './recorder/recorder.component';
import { CounterDirective } from './recorder/directives/counter.directive';
import {ModalModule} from "ngx-modal";

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    PagesModule,
    routing,
    ModalModule
  ],
  declarations: [
    AppComponent,
    RecorderComponent,
    CounterDirective,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
