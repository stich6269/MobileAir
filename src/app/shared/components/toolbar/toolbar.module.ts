import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar.component';
import { MdToolbarModule, MdIconModule } from '@angular/material';

@NgModule({
	imports: [
		CommonModule,
		MdToolbarModule,
		MdIconModule
	],
	exports: [ToolbarComponent],
	declarations: [ToolbarComponent]
})
export class ToolbarModule {
}
