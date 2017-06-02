import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../../shared/services/header/header.service';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit {

  constructor(private headerService: HeaderService) { 
	  this.headerService.setHeader({title: 'Построение графиков'})
  }

  ngOnInit() {
  }

}
