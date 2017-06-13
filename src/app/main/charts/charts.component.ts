import { Component, ViewChild, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Rx';
import { BaseChartDirective } from 'ng2-charts/index';
import { DeviceDataService } from '../../shared/services/device-data/device-data.service';
import { IDeviceData } from '../../shared/services/device-data/device.interfaces';

@Component({
	selector: 'app-charts',
	templateUrl: './charts.component.html',
	styleUrls: ['./charts.component.scss']
})

export class ChartsComponent implements OnInit, OnDestroy{
	lastItemSub: Subscription;
	lastListSub: Subscription;
	lineChartData:Array<any> = [];
	lineChartLabels:Array<any> = [];

	selected: string = 'temperature';
	displayLast: number = 20;
	autoUpdate: boolean = true;


	@ViewChild(BaseChartDirective) chart: BaseChartDirective;
	constructor(private deviceDataService: DeviceDataService) {}

	ngOnInit(): void{
		this.loadData();
	}

	ngOnDestroy(): void {
		if(this.lastItemSub) this.lastItemSub.unsubscribe();
	}

	onSelect(sensorName: string): void{
		this.selected = sensorName;
		this.lastItemSub.unsubscribe();
		this.lastListSub.unsubscribe();
		this.loadData();
	}

	onAutoUpdate(): void {
		this.autoUpdate = !this.autoUpdate;
		if(!this.autoUpdate) this.lastItemSub.unsubscribe();
		else this.ngOnInit();
	}

	loadData(): void {
		this.lastListSub = this.deviceDataService
			.getLast(this.displayLast)
			.subscribe(this.updateInitialArr.bind(this));

		if(this.autoUpdate){
			this.lastItemSub = this.deviceDataService.getLast()
				.subscribe((data: Array<IDeviceData>) => {
					if(data && data.length){
						this.addPointToArr(data[0]);
					}
				});
		}
	}

	updateInitialArr(data: Array<IDeviceData>): void {
		this.lineChartLabels.splice(0);
		this.lineChartData.splice(0);

		data.forEach((item: IDeviceData) => {
			if(this.selected === 'voc') item.voc = 10000 - item.voc;
			this.lineChartLabels.push(this.getTimeString(item.timestamp));
			this.lineChartData.push(item[this.selected]);
		});

		this.chart.chart.update();
		this.lastListSub.unsubscribe();
	}

	addPointToArr(data: IDeviceData): void {
		if(this.lineChartLabels.length){
			let time: string = this.getTimeString(data.timestamp),
				length: number = this.displayLast - 1;

			if(this.selected === 'voc') data.voc = 10000 - data.voc;

			if(this.lineChartLabels.length > length){
				this.lineChartLabels.shift();
				this.lineChartData.shift();
			}

			this.lineChartLabels.push(time);
			this.lineChartData.push(data[this.selected]);
			this.chart.chart.update();
		}
	}

	getTimeString(timestamp: number): string {
		let time: Date = new Date(timestamp);
		return `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`;
	}
}
