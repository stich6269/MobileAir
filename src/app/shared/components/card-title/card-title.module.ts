import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardTitleComponent } from './card-title.component';
import { MdIconModule } from '@angular/material';

@NgModule({
	imports: [
		CommonModule,
		MdIconModule
	],
	exports: [CardTitleComponent],
	declarations: [CardTitleComponent]
})

export class CardTitleModule {
}
