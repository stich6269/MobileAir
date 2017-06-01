import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllSensorsComponent } from './all-sensors.component';
import { ToolbarModule } from '../shared/components/index';
import { NavbarModule } from '../shared/components/index';

@NgModule({
	imports: [
		CommonModule,
		ToolbarModule,
		NavbarModule,
	],
	exports: [AllSensorsComponent],
	declarations: [AllSensorsComponent]
})
export class AllSensorsModule {
}
