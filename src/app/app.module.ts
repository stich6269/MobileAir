import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app.routes';

import { DeviceListModule } from './device-list/index';
import { MainModule } from './main/index';

import { DeviceDataService } from './shared/services/device-data/device-data.service';
import { HeaderService } from './shared/services/header/header.service';
import { ToolbarModule } from './shared/components/toolbar/toolbar.module';

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
		ToolbarModule,

		DeviceListModule,
		MainModule
	],
	providers: [
		DeviceDataService,
		HeaderService
	],
	bootstrap: [AppComponent]
})
export class AppModule {
}
