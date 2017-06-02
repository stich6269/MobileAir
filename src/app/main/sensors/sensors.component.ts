import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../../shared/services/header/header.service';
import { slideInOutAnimation } from '../../shared/router-animation/index';

@Component({
	selector: 'app-sensors',
	templateUrl: './sensors.component.html',
	styleUrls: ['./sensors.component.scss'],
	animations: [slideInOutAnimation],
	host: { '[@slideInOutAnimation]': '' }

})

export class SensorsComponent implements OnInit {

	constructor(private headerService:HeaderService) {
		this.headerService.setHeader({title: 'Датчики устройства'})
	}

	ngOnInit() {

	}

}
