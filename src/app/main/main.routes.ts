import { Route } from '@angular/router/router';
import { MainComponent } from './main.component';

import { SensorsRouter } from './sensors/index';
import { ChartsRouter } from './charts/index';

export const MainRoutes: Route = {
	path: 'main',
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
