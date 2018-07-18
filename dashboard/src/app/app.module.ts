import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "./app-routing.module";
import { PlayerModule } from "./player/player.module";
import { HttpClientModule } from "@angular/common/http";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";


@NgModule({
	declarations: [
		AppComponent,
	],
	imports: [
		BrowserModule,
		HttpClientModule,
		BrowserAnimationsModule,
		AppRoutingModule,
		PlayerModule,
		StoreModule.forRoot("app", {}),
		EffectsModule.forRoot([]),
		StoreDevtoolsModule.instrument({
			maxAge: 10
		})
	],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {
}
