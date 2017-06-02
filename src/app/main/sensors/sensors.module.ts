import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SensorsComponent } from './sensors.component';

@NgModule({
	imports: [
		CommonModule
	],
	exports: [SensorsComponent],
	declarations: [SensorsComponent]
})

export class SensorsModule {
}
