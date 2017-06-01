import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { MdToolbarModule, MdIconModule } from '@angular/material';

@NgModule({
	imports: [
		CommonModule,
		MdToolbarModule,
		MdIconModule
	],
	exports: [NavbarComponent],
	declarations: [NavbarComponent]
})
export class NavbarModule {
}
