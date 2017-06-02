import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { IHeader } from './header.interface';

@Injectable()

export class HeaderService {
	data: Subject<IHeader>;
	
  	constructor() { 
		this.data = new Subject();
	}
	
	setHeader(data: IHeader): void{
		this.data.next(data);
	}
	
	getObservable(): Subject<IHeader> {
		return this.data;
	}
}
