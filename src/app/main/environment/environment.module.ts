import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnvironmentComponent } from './environment.component';
import { CardTitleModule } from '../../shared/components/index';
import { MdCardModule } from '@angular/material';

@NgModule({
	imports: [
		CommonModule,
		CardTitleModule,
		MdCardModule
	],
	declarations: [EnvironmentComponent]
})
export class EnvironmentModule {
}
