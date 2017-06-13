import { Component } from '@angular/core';
import { HeaderService } from '../../services/header/header.service';
import { IHeader } from '../../services/header/header.interface';
import { Router, UrlSegment } from '@angular/router';

@Component({
	selector: 'app-toolbar',
	templateUrl: './toolbar.component.html',
	styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
	data: IHeader;
	url: UrlSegment[];

	constructor(
		private router: Router,
		private headerService: HeaderService){
		headerService.getObservable()
			.subscribe((data: IHeader) => this.data = data);

		router.events
			.subscribe(({url}: any) => this.url = url);
	}

	goToHome(): void {
		this.router.navigate(['/']);
	}
}
