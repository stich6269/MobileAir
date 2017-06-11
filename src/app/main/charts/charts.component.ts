import { Component } from '@angular/core';
import { HeaderService } from '../../shared/services/header/header.service';

@Component({
	selector: 'app-charts',
	templateUrl: './charts.component.html',
	styleUrls: ['./charts.component.scss']
})

export class ChartsComponent {
	selected: string = 'temperature';

	constructor() {}


	lineChartData:Array<any> = [
		{data: [65.3, 59.4, 80.8, 81.98, 56.45, 55.87, 40.05], label: 'Series A'}
	];
	lineChartLabels:Array<any> = ['1', '2', '3', '4', '5', '6', '7'];
	lineChartType:string = 'line';
	lineChartOptions:any = {
		legend: {display: false},
		responsive: true
	};

	onSelect(sensorName: string): void{
		console.log(sensorName);
	}

	public chartClicked(e:any):void {
		console.log(e);
	}

	public chartHovered(e:any):void {
		console.log(e);
	}

}
