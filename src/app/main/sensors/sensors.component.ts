import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../../shared/services/header/header.service';

@Component({
  selector: 'app-sensors',
  templateUrl: './sensors.component.html',
  styleUrls: ['./sensors.component.scss']
})
export class SensorsComponent implements OnInit {

  constructor(private headerService: HeaderService) {
	  this.headerService.setHeader({title: 'Датчики устройства'})
  }

  ngOnInit() {

  }

}
