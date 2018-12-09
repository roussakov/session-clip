import { NgModule } from '@angular/core';
import {
  MatSliderModule,
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  MatProgressBarModule,
  MatExpansionModule, MatProgressSpinnerModule
} from "@angular/material";

@NgModule({
  imports: [
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatProgressBarModule,
    MatExpansionModule,
    MatSliderModule,
    MatProgressSpinnerModule
  ],
  exports: [
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatProgressBarModule,
    MatExpansionModule,
    MatSliderModule,
    MatProgressSpinnerModule
  ],
  declarations: []
})
export class MaterialModule {
}
