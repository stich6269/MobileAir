import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { DeviceDataService } from '../../shared/services/device-data/device-data.service';
import { IDeviceData } from '../../shared/services/device-data/device.interfaces';
import { Subscription } from 'rxjs/Rx';
import { BaseChartDirective } from 'ng2-charts/index';
import 'rxjs/add/operator/take'

@Component({
	selector: 'app-sensors',
	templateUrl: './sensors.component.html',
	styleUrls: ['./sensors.component.scss']
})

export class SensorsComponent implements OnInit, OnDestroy {
	data: IDeviceData;
	displayLast: number = 50;

	lastItemSub: Subscription;
	lastListSub: Subscription;
	lineChartData:Array<number> = [];
	lineChartLabels:Array<string> = [];

	@ViewChild(BaseChartDirective) chart: BaseChartDirective;
	constructor(private deviceDataService: DeviceDataService) {}

	ngOnInit(): void{
		this.loadData();
	}

	ngOnDestroy(): void {
		if(this.lastItemSub) this.lastItemSub.unsubscribe();
	}

	loadData(): void {
		this.lastItemSub = this.deviceDataService.getLast()
			.subscribe(this.updateLastPoint.bind(this));

		this.lastListSub = this.deviceDataService
			.getLast(this.displayLast)
			.subscribe(this.updateInitialArr.bind(this))
	}


	updateInitialArr(data: Array<IDeviceData>, sub: Subscription): void {
		data.forEach((item: IDeviceData) => {
			this.lineChartLabels.push(this.getTimeString(item.timestamp));
			this.lineChartData.push(item.slavel);
		});

		this.chart.chart.update();
		this.lastListSub.unsubscribe();
	}

	updateLastPoint(data: Array<IDeviceData>): void {
		if(!data || !data.length) return;

		this.data = data[0];
		this.data.voc = this.getVoc(this.data.voc);
		this.addPointToArr();
	}

	addPointToArr(): void {
		if(this.lineChartLabels.length){
			let time: string = this.getTimeString(this.data.timestamp),
				length: number = this.displayLast - 1;

			if(this.lineChartLabels.length > length){
				this.lineChartLabels.shift();
				this.lineChartData.shift();
			}

			this.lineChartLabels.push(time);
			this.lineChartData.push(this.data.slavel);
			this.chart.chart.update();
		}
	}

	onAutoUpdate({checked}: any): void {
		if(!checked) this.lastItemSub.unsubscribe();
		else this.ngOnInit();
	}

	getTimeString(timestamp: number): string {
		let time: Date = new Date(timestamp);
		return `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`;
	}

	getVoc(voc: number): number {
		let vocSensor: number = voc / 10000;
		return parseFloat(vocSensor.toFixed(2));
	}
}
