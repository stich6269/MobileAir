import { Component, OnInit, ViewChild } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts/index';
import { DeviceDataService } from '../../shared/services/device-data/device-data.service';
import { Subscription } from 'rxjs/Rx';
import { IDeviceData } from '../../shared/services/device-data/device.interfaces';

@Component({
  selector: 'app-environment',
  templateUrl: './environment.component.html',
  styleUrls: ['./environment.component.scss']
})
export class EnvironmentComponent implements OnInit {
	lastItemSub: Subscription;
	displayLast: number = 30;
	light: IStat;
	voc: IStat;

	@ViewChild(BaseChartDirective) chart: BaseChartDirective;
	constructor(private deviceDataService: DeviceDataService) {
		this.light = new IStat({
			name: 'light',
			from: 200,
			to: 10000
		});
		this.voc = new IStat({
			name: 'voc',
			from: 4500
		});
	}

	ngOnInit(): void{
		this.loadData();
	}

	ngOnDestroy(): void {
		if(this.lastItemSub) this.lastItemSub.unsubscribe();
	}

	loadData(): void {
		this.deviceDataService
			.getLast(this.displayLast)
			.take(1)
			.subscribe((data: IDeviceData[]) => {
				if(data && data.length){
					this.light.update(data);
					this.voc.update(data);
				}
			});

		this.lastItemSub = this.deviceDataService.getLast()
			.subscribe((data: Array<IDeviceData>) => {
				if(data && data.length){
					this.light.addPoint(data[0]);
					this.voc.addPoint(data[0]);
				}
			});
	}
}




export class IStat {
	private name: string;
	private depth: number = 30;
	show: boolean = false;
	title: string;
	description: string;


	from: number;
	to: number;
	current: number = 0;
	average: number = 0;
	max: number = 0;
	min: number = 99999;
	time: string;

	data: IDeviceData[];
	constructor({title, description, from, to, name}: any) {
		if(title) this.title = title;
		if(description) this.description = description;
		if(from) this.from = from;
		if(to) this.to = to;
		if(name) this.name = name;
	}

	update(samplesArr?: IDeviceData[]): void{
		if(samplesArr) this.data = samplesArr;

		this.data.forEach((sample: IDeviceData) => {
			let value: number = sample[this.name];
			this.average += value;
			if(value < this.min) this.min = value;
			if(this.max < value) this.max = value;
		});

		this.average = this.average / this.data.length;
		this.current = this.data[this.data.length-1][this.name];

		if(this.current > this.to || this.current < this.from){
			this.show = true;
			this.time = `${(new Date()).getHours()} : ${(new Date()).getMinutes()}`;
		}else {
			this.show = false;
		}

	}

	addPoint(sample: IDeviceData): void {
		if(this.data.length){
			let length: number = this.depth - 1;
			if(this.data.length > length) this.data.shift();
			this.data.push(sample);
			this.update();
		}
	}
}
