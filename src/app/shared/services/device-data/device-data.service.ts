import { Injectable } from '@angular/core';
import { IDevice } from './device.interfaces';

@Injectable()

export class DeviceDataService {
	device: IDevice;
	
	constructor() {
	}
	
	public setDevice(device: IDevice): any {
		this.device = device;
		return this;
	}
	
	get deviceId(): string {
		return this.device ? this.device.id : null;
	}

	get deviceName(): string {
		return this.device ? this.device.name : null;
	}
}
