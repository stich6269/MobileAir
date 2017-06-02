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

export class ChartsComponent implements OnInit {

	constructor(private headerService:HeaderService) {
		this.headerService.setHeader({title: 'Построение графиков'})
	}

	ngOnInit() {
	}

}
