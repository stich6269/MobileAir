import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SensorsComponent } from './sensors.component';
import { MdCardModule, MdButtonModule, MdIconModule } from '@angular/material';

@NgModule({
	imports: [
		CommonModule,
		MdCardModule,
		MdButtonModule,
		MdIconModule
	],
	exports: [SensorsComponent],
	declarations: [SensorsComponent]
})

export class SensorsModule {
}
