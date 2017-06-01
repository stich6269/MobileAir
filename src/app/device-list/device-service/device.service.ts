import { Injectable } from '@angular/core';
import { IDeviceListItem } from './device.interfaces';
import { DEVICE_LIST } from './device.constants';

@Injectable()

export class DeviceListService {
	devices: Array<IDeviceListItem>;

	constructor(){
		this.devices = DEVICE_LIST;
	}

	getDeviceList(): Array<IDeviceListItem>{
		return this.devices;
	}

	addDevice(device: IDeviceListItem): void{
		this.devices.push(device);
	}

	removeDevice(deviceId: string): void{
		this.devices = this.devices.filter((device: IDeviceListItem) => {
			return device.id !== deviceId;
		})
	}

	editDevice(newDevice: IDeviceListItem): void{
		let device: IDeviceListItem = this.devices
			.find((device: IDeviceListItem) => {
				return device.id === newDevice.id;
			});

		Object.assign(device, newDevice);
	}
}
