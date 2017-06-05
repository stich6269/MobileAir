import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { DeviceDataService } from '../services/device-data/device-data.service';

@Injectable()

export class CanActivateDevice implements CanActivate{
	constructor(
		private router: Router,
		private deviceDataService:DeviceDataService) {}

	canActivate() {
		let isDevice: boolean = !!this.deviceDataService.deviceId;
		if(!isDevice) this.router.navigate(['/']);
		return isDevice
	}
}
