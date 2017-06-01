import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeviceListComponent } from './device-list.component';
import { MdListModule, MdIconModule, MdButtonModule } from '@angular/material';

import { DeviceListService } from './device-service/device.service';
import { ToolbarModule } from '../shared/components/index';
import { RouterModule } from '@angular/router';

@NgModule({
	imports: [
		CommonModule,
		MdListModule,
		MdIconModule,
		MdButtonModule,
		ToolbarModule,
		RouterModule
	],
	declarations: [DeviceListComponent],
	providers: [DeviceListService]
})

export class DeviceListModule {
}
