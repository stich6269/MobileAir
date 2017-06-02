import { Injectable } from '@angular/core';
import { DEVICE_LIST } from './device.constants';
import { IDevice } from '../../shared/services/device-data/device.interfaces';

@Injectable()

export class DeviceListService {
	devices: Array<IDevice>;

	constructor(){
		this.devices = DEVICE_LIST;
	}

	getDeviceList(): Array<IDevice>{
		return this.devices;
	}

	addDevice(device: IDevice): void{
		this.devices.push(device);
	}

	removeDevice(deviceId: string): void{
		this.devices = this.devices.filter((device: IDevice) => {
			return device.id !== deviceId;
		})
	}

	editDevice(newDevice: IDevice): void{
		let device: IDevice = this.devices
			.find((device: IDevice) => {
				return device.id === newDevice.id;
			});

		Object.assign(device, newDevice);
	}
}
