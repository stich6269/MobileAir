import { Component } from '@angular/core';
import { HeaderService } from '../shared/services/header/header.service';
import { DeviceDataService } from '../shared/services/device-data/device-data.service';

@Component({
	selector: 'app-main',
	templateUrl: './main.component.html',
	styleUrls: ['./main.component.scss']
})

export class MainComponent {
	constructor(
		private deviceDataService: DeviceDataService,
		private headerService: HeaderService) {
		this.headerService.setHeader({
			title: this.deviceDataService.deviceName
		})
	}
}
