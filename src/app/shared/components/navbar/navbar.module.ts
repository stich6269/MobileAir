import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { MdToolbarModule, MdIconModule } from '@angular/material';
import { RouterModule } from '@angular/router';

@NgModule({
	imports: [
		CommonModule,
		MdToolbarModule,
		MdIconModule,
		RouterModule
	],
	exports: [NavbarComponent],
	declarations: [NavbarComponent]
})
export class NavbarModule {
}
