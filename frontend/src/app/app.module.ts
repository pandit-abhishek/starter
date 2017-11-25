import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';



import { AppComponent } from './app.component';
import {AppRoutingModule} from './app.routing';

import {FrontendLayoutComponent} from './layouts/frontend-layout.component';

@NgModule({

	declarations: [
		AppComponent,
		FrontendLayoutComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
