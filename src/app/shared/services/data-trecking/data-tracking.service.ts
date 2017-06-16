import { Injectable } from '@angular/core';
import { DeviceDataService } from '../device-data/device-data.service';
import { IDeviceData } from '../device-data/device.interfaces';
import { ISensorsSetup, SENSORS_SETUP, IParams, ISensorAlert } from './data-trecking.constants';

@Injectable()

export class DataTrackingService {
	private depth: number = 50;
	private store: IDeviceData[];
	private sensor: string = 'co2';
    private sensorsSetup: ISensorsSetup;

	public healthStream: Observable<any>;
	public alertsStream: Observable<any>;
	public timeStream: Observable<any>;

	constructor (private deviceDataService: DeviceDataService) {
		this.healthStream = new Observable();
		this.alertsStream = new Observable();
		this.timeStream = new Observable();
        this.sensorsSetup = SENSORS_SETUP;
		this.trackingStart();
	};

	trackingStart(): void {
        let setStore: Function = this.setStore.bind(this),
            addPoint: Function = this.addPoint.bind(this);

		this.deviceDataService
			.getLast(this.depth)
			.take(1)
            .subscribe(setStore);

		this.deviceDataService
            .getLast()
			.subscribe(addPoint)
	};

	setStore(data: IDeviceData[]): void {
        if(data && data.length) {
            this.store = data;
            this.update();
        }
    }

	private addPoint(point: IDeviceData[]): void{
		if(!point.length || !this.store.length) return;

        if(this.store.length > (this.depth - 1)) {
            this.store.shift();
        }

        this.store.push(point[0]);
        this.update();
	};

	private update(): void {
        this.alertsTrack();
	};


    //let's track if all parameters are ok, if not
    //calculate data and trigger an events with alerts
    alertsTrack(): void {
        let sample: IDeviceData = this.store.pop(),
            sensors: string[] = Object.keys(sample),
            alertStore: ISensorAlert[] = [];

        sensors.forEach((sName: string) => {
            let setup: IParams = this.sensorsSetup[sName],
                value: number = sample[sName],
                toMush: string = (value > setup.to) ? setup.toMuch : null,
                toLess: string = (value < setup.from) ? setup.toLess : null;

            if(toMush || toLess) {
                let error: string = toLess || toMush,
                    opt: number = setup.to || setup.from,
                    alert: ISensorAlert = this.createAlertObj(sName, error, opt);

                alertStore.push(alert);
            }

            if(alertStore.length){
                this.alertsStream.next(alertStore);
            }
        })
    }

    createAlertObj(sName: string, error: string, opt: number): ISensorAlert {
        let tempAvgSum: number = 0,
            alert: ISensorAlert = {
            displayText: error,
            min: 999999,
            max: 0,
            average: 0,
            current: 0,
            optimal: opt
        };

        this.store.forEach((sample: IDeviceData) => {
            let sVal: number = sample[sName];

            if(sVal < alert.min) alert.min = sVal;
            if(sVal > alert.max) alert.max = sVal;
            tempAvgSum += sVal;
        });


        alert.current = this.store.pop()[sName];
        alert.average = tempAvgSum / this.store.length;
        return alert;
    }



	private getPercent(sensorName:string, val:number): void {

	};

	private decodeTime(timestamp: number): void {

	}

}
