import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar.component';
import { MdToolbarModule } from '@angular/material';

@NgModule({
	imports: [
		CommonModule,
		MdToolbarModule
	],
	exports: [ToolbarComponent],
	declarations: [ToolbarComponent]
})
export class ToolbarModule {
}
