import { Injectable } from '@angular/core';
import { IDevice, IDeviceData } from './device.interfaces';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()

export class DeviceDataService {
	device: IDevice;

	constructor(public database: AngularFireDatabase) {}

	public setDevice(device: IDevice): any {
		this.device = device;
		return this;
	}

	get deviceId(): string {
		return this.device ? this.device.deviceId : null;
	}

	get deviceName(): string {
		return this.device ? this.device.model : null;
	}

	getLast(n: number = 1): FirebaseListObservable<IDeviceData[]>{
		return this.database.list('/data/' + this.deviceId, {
			query: {limitToLast: n}
		});
	}

	getFull(): FirebaseListObservable<IDeviceData[]>{
		return this.database.list('/data/' + this.deviceId);
	}
}
