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

	@ViewChild(BaseChartDirective) chart: BaseChartDirective;
	constructor(private deviceDataService: DeviceDataService) {
		this.light = new IStat({});
	}

	ngOnInit(): void{
		this.loadData();
	}

	ngOnDestroy(): void {
		if(this.lastItemSub) this.lastItemSub.unsubscribe();
	}

	loadData(): void {
		let lastListSub: Subscription = this.deviceDataService
			.getLast(this.displayLast)
			.subscribe((data: IDeviceData[]) => {
				if(data && data.length){
					this.light.update(data);
					console.log(data);
					lastListSub.unsubscribe();
				}

			});

		this.lastItemSub = this.deviceDataService.getLast()
			.subscribe((data: Array<IDeviceData>) => {
				if(data && data.length){
					this.light.addPoint(data[0]);
					console.log(this.light);
				}
			});
	}
}

export class IStat {
	private show: boolean = false;
	private name: string = 'light';
	private depth: number = 30;
	title: string = 'Превышен оптимальный параметр';
	description: string = 'По возможности устраните воздействие негативного фактора, так как это влияет на ' +
		'ваше сомочуствие / продуктивной / настроение. Следуйте рекомендациям';


	optimal: number = 20;
	current: number = 0;
	average: number = 0;
	max: number = 0;
	min: number = 99999;
	time: string;

	data: IDeviceData[];
	constructor({title, description, opt, name}: any) {
		/*this.title = title;
		this.description = description;
		this.optimal = opt;
		this.name = name;*/
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

		if(this.current > this.optimal){
			this.show = true;
			this.time = (new Date()).toLocaleDateString();
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
