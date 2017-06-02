import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsComponent } from './charts.component';
import { MdButtonModule, MdCardModule } from '@angular/material';

@NgModule({
	imports: [
		CommonModule,
		MdCardModule,
		MdButtonModule
	],
	exports: [ChartsComponent],
	declarations: [ChartsComponent]
})
export class ChartsModule {
}
