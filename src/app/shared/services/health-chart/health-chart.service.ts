import { DeviceDataService } from '../device-data/device-data.service';
export { Injectable } from '@angular/core';

@Injectable()

export class HealthChartService{
    public timeLine: Observable<number[]>;

    constructor(private deviceDataService: DeviceDataService){
        this.timeLine = new Observable();
    }

    


}