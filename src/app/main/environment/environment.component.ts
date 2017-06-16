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
		this.light = new IStat({});
		this.voc = new IStat({
			name: 'voc',
			opt: 100
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
					console.log(data[0])
					this.light.addPoint(data[0]);
					this.voc.addPoint(data[0]);
				}
			});
	}
}
