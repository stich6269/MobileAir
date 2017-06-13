import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainComponent } from './main.component';
import { ToolbarModule } from '../shared/components/index';
import { NavbarModule } from '../shared/components/index';
import { RouterModule } from '@angular/router';

import { SensorsModule } from './sensors/index';
import { AppChartsModule } from './charts/index';
import { CanActivateDevice } from '../shared/guards/can-activate-device.guard';
import { EnvironmentModule } from './environment/index';

@NgModule({
	imports: [
		CommonModule,
		ToolbarModule,
		NavbarModule,
		RouterModule,

		SensorsModule,
		AppChartsModule,
		EnvironmentModule
	],
	exports: [MainComponent],
	declarations: [MainComponent],
	providers: [CanActivateDevice]
})
export class MainModule {
}
