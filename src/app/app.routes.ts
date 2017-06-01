import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { DeviceListRouter } from './device-list/index';
import { AllSensorsRoutes } from './all-sensors/index';


const routes: Route[] = [
	{
		path: '',
		redirectTo: 'all-sensors/225',
		pathMatch: 'full'
	},
	DeviceListRouter,
	AllSensorsRoutes
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule],
  providers: []
})

export class AppRoutingModule {

}
