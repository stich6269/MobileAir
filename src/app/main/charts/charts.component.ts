import { Component } from '@angular/core';
import { HeaderService } from '../../shared/services/header/header.service';

@Component({
	selector: 'app-charts',
	templateUrl: './charts.component.html',
	styleUrls: ['./charts.component.scss']
})

export class ChartsComponent {
	selected: string = 'temperature';
	constructor(private headerService:HeaderService) {
		//this.headerService.setHeader({title: 'Построение графиков'})
	}


	lineChartData:Array<any> = [
		{data: [65.3, 59.4, 80.8, 81.98, 56.45, 55.87, 40.05], label: 'Series A'}
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
		let _lineChartData:Array<any> = new Array(this.lineChartData.length);
		for (let i = 0; i < this.lineChartData.length; i++) {
			_lineChartData[i] = {data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label};
			for (let j = 0; j < this.lineChartData[i].data.length; j++) {
				_lineChartData[i].data[j] = (Math.random() * 100) + 1;
			}
		}
		this.lineChartData = _lineChartData;
		this.selected = sensorName;
	}

	public chartClicked(e:any):void {
		console.log(e);
	}

	public chartHovered(e:any):void {
		console.log(e);
	}

}
