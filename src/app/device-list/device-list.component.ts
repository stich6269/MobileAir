import { Component } from '@angular/core';
import { IDeviceListItem } from './device-service/device.interfaces';
import { DeviceListService } from './device-service/device.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-device-list',
	templateUrl: './device-list.component.html',
	styleUrls: ['./device-list.component.scss']
})
export class DeviceListComponent {
	devices: Array<IDeviceListItem>;
	constructor(
		private deviceListService: DeviceListService,
		private router: Router) {
		this.devices = this
			.deviceListService
			.getDeviceList();
	}

	onDeviceClick(device: IDeviceListItem): void {
		this.router.navigate(['./all-sensors', device.id]);
	}
}
