import { Component } from '@angular/core';
import { DeviceListService } from './device-service/device.service';
import { Router } from '@angular/router';
import { DeviceDataService } from '../shared/services/device-data/device-data.service';
import { IDevice } from '../shared/services/device-data/device.interfaces';
import { HeaderService } from '../shared/services/header/header.service';

@Component({
	selector: 'app-device-list',
	templateUrl: './device-list.component.html',
	styleUrls: ['./device-list.component.scss']
})
export class DeviceListComponent {
	devices: Array<IDevice>;

	constructor(
		private deviceListService: DeviceListService,
		private deviceDataService: DeviceDataService,
		private headerService: HeaderService,
		private router: Router) {
		
		this.headerService.setHeader({title: 'Мои устройства'});
		deviceListService
			.getDeviceList()
			.subscribe((resp: Array<any>) => this.devices = resp)
	}

	onDeviceClick(device: IDevice): void {
		this.deviceDataService.setDevice(device);
		this.router.navigate(['./main']);
	}
}
