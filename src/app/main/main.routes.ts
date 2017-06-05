import { Route } from '@angular/router/router';
import { MainComponent } from './main.component';

import { SensorsRouter } from './sensors/index';
import { ChartsRouter } from './charts/index';
import { CanActivateDevice } from '../shared/guards/can-activate-device.guard';

export const MainRoutes: Route = {
	path: 'main',
	canActivate: [CanActivateDevice]	,
	component: MainComponent,
	children: [
		SensorsRouter,
		ChartsRouter,
		{
			path: '',
			redirectTo: 'sensors',
			pathMatch: 'full'
		}
	]
};
