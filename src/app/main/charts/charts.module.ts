import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsComponent } from './charts.component';
import { MdButtonModule, MdCardModule } from '@angular/material';
import { ChartsModule } from 'ng2-charts';
import { CardTitleModule } from '../../shared/components/index';

@NgModule({
	imports: [
		CommonModule,
		MdCardModule,
		MdButtonModule,
		ChartsModule,
		CardTitleModule
	],
	exports: [ChartsComponent],
	declarations: [ChartsComponent]
})
export class AppChartsModule {
}
