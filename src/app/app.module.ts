import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app.routes';

import { DeviceListModule } from './device-list/index';
import { AllSensorsModule } from './all-sensors/index';

@NgModule({
	declarations: [
		AppComponent,
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
		AppRoutingModule,
		BrowserAnimationsModule,

		DeviceListModule,
		AllSensorsModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}
