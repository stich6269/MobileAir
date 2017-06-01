import { Route } from '@angular/router/router';
import { AllSensorsComponent } from './all-sensors.component';

export const AllSensorsRoutes: Route = {
	path: 'all-sensors/:id',
	component: AllSensorsComponent
};
