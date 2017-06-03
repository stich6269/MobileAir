import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../../shared/services/header/header.service';
import { slideInOutAnimation } from '../../shared/router-animation/index';

@Component({
	selector: 'app-charts',
	templateUrl: './charts.component.html',
	styleUrls: ['./charts.component.scss'],
	animations: [slideInOutAnimation],
	host: {'[@slideInOutAnimation]': ''}
})

export class ChartsComponent {
	selected: string = 'temperature';
	constructor(private headerService:HeaderService) {
		//this.headerService.setHeader({title: 'Построение графиков'})
	}


	lineChartData:Array<any> = [
		[65, 59, 80, 81, 56, 55, 40],
		[28, 48, 40, 19, 86, 27, 90]
	];
	lineChartLabels:Array<any> = ['1', '2', '3', '4', '5', '6', '7'];
	lineChartType:string = 'line';
	lineChartOptions:any = {
		legend: {
			display: false
		},
		responsive: true
	};

	onSelect(sensorName: string): void{
		console.log(sensorName);
		this.selected = sensorName;
	}

	public chartClicked(e:any):void {
		console.log(e);
	}

	public chartHovered(e:any):void {
		console.log(e);
	}

}
