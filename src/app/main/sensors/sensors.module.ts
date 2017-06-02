import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SensorsComponent } from './sensors.component';
import { MdCardModule, MdButtonModule } from '@angular/material';

@NgModule({
	imports: [
		CommonModule,
		MdCardModule,
		MdButtonModule
	],
	exports: [SensorsComponent],
	declarations: [SensorsComponent]
})

export class SensorsModule {
}
