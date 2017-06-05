export interface IDevice {
	deviceId: string;
	model: string;
	_co2: string;
	_voc: string;
	_temperature: string;
	_pressure: string;
	_altitude: string;
	_lignt: string;
	_ultraviolet: string;
	_sound: string;
}

export interface IDeviceData {
	co2: number;
	voc: number;
	pressure: number;
	temperature: number;
	altitude: number;
	humidity: number;
	light: number;
	ultraviolet: number;
	slavel: number;
	sdensity: number;
}
