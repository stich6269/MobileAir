import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainComponent } from './main.component';
import { ToolbarModule } from '../shared/components/index';
import { NavbarModule } from '../shared/components/index';
import { RouterModule } from '@angular/router';

import { SensorsModule } from './sensors/index';
import { ChartsModule } from './charts/index';

@NgModule({
	imports: [
		CommonModule,
		ToolbarModule,
		NavbarModule,
		RouterModule,

		SensorsModule,
		ChartsModule
	],
	exports: [MainComponent],
	declarations: [MainComponent]
})
export class MainModule {
}
