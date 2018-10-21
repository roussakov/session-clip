import { NgModule } from '@angular/core';
import {
  MatSliderModule,
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  MatProgressBarModule,
  MatExpansionModule
} from "@angular/material";

@NgModule({
  imports: [
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatProgressBarModule,
    MatExpansionModule,
    MatSliderModule
  ],
  exports: [
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatProgressBarModule,
    MatExpansionModule,
    MatSliderModule
  ],
  declarations: []
})
export class MaterialModule {
}
