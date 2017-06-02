import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { DeviceListRouter } from './device-list/index';
import { MainRoutes } from './main/index';


const routes: Route[] = [
	DeviceListRouter,
	MainRoutes
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule],
  providers: []
})

export class AppRoutingModule {

}
