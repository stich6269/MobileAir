import { Injectable } from '@angular/core';
import { IDevice } from '../../shared/services/device-data/device.interfaces';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Observable } from 'rxjs/Rx';

@Injectable()

export class DeviceListService {
	devices: FirebaseListObservable<Array<IDevice>>;

	constructor(private database: AngularFireDatabase){
		this.devices = database.list('/devices')
	}

	getDeviceList(): Observable<any> {
		return this.devices;
	}

	addDevice(device: IDevice): void{
		this.devices.push(device);
	}

	removeDevice(deviceId: string): void{}
	editDevice(newDevice: IDevice): void{}
}
