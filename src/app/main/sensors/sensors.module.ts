import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SensorsComponent } from './sensors.component';
import { MdCardModule, MdButtonModule, MdIconModule, MdSlideToggleModule } from '@angular/material';
import { CardTitleModule } from '../../shared/components/index';
import { ChartsModule } from 'ng2-charts';

@NgModule({
	imports: [
		CommonModule,
		MdCardModule,
		MdButtonModule,
		MdIconModule,
		CardTitleModule,
		ChartsModule,
		MdSlideToggleModule
	],
	exports: [SensorsComponent],
	declarations: [SensorsComponent]
})

export class SensorsModule {
}
