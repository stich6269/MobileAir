import { Component } from '@angular/core';
import { HeaderService } from '../../services/header/header.service';
import { IHeader } from '../../services/header/header.interface';

@Component({
	selector: 'app-toolbar',
	templateUrl: './toolbar.component.html',
	styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
	data: IHeader;
	
	constructor(private headerService: HeaderService){
		this.headerService
			.getObservable()
			.subscribe((data: IHeader) => {
				this.data = data;
			})
	}
}
