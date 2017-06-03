import { Component } from '@angular/core';
import { slideInOutAnimation } from '../../shared/router-animation/index';

@Component({
	selector: 'app-sensors',
	templateUrl: './sensors.component.html',
	styleUrls: ['./sensors.component.scss'],
	animations: [slideInOutAnimation],
	host: { '[@slideInOutAnimation]': '' }

})

export class SensorsComponent  {

	constructor() {
	}

	// lineChart
	public lineChartData:Array<any> = [
		[65, 59, 80, 81, 56, 55, 40]
	];
	public lineChartLabels:Array<any> = ['1', '2', '3', '4', '5', '6', '7'];
	public lineChartType:string = 'line';
	public lineChartOptions:any = {
		legend: {
			display: false
		},
		responsive: true
	};
	public chartClicked(e:any):void {
		console.log(e);
	}

	public chartHovered(e:any):void {
		console.log(e);
	}
}
