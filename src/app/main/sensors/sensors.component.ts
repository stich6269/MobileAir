import { Component, OnInit } from '@angular/core';
import { DeviceDataService } from '../../shared/services/device-data/device-data.service';
import { IDeviceData } from '../../shared/services/device-data/device.interfaces';
import { Subscription } from 'rxjs/Rx';

@Component({
	selector: 'app-sensors',
	templateUrl: './sensors.component.html',
	styleUrls: ['./sensors.component.scss']
})

export class SensorsComponent implements OnInit {
	data: IDeviceData;
	dataSubscription: Subscription;
	constructor(private deviceDataService: DeviceDataService) {}

	lineChartData:Array<any> = [[65, 59, 80, 81, 56, 55, 40]];
	lineChartLabels:Array<any> = ['1', '2', '3', '4', '5', '6', '7'];
	lineChartType:string = 'line';
	lineChartOptions:any = {
		legend: {
			display: false
		},
		responsive: true
	};

	ngOnInit(): void{
		this.dataSubscription = this
			.deviceDataService
			.getLast()
			.subscribe(
				(data: Array<IDeviceData>) => {
					if (data && data.length){
						this.data = data[0];

						let voc: number = this.data.voc / 10000;
						this.data.voc = parseFloat(voc.toFixed(2));
					}
				}
			);


	}


	onAutoUpdate({checked}: any): void {
		if(!checked) this.dataSubscription.unsubscribe();
		else this.ngOnInit();
	}
}
