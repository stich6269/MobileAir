import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { DeviceListRouter } from './device-list/index';


const routes: Route[] = [
	DeviceListRouter
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule],
  providers: []
})

export class AppRoutingModule {

}
