// import the required animation functions from the angular animations module
import { trigger, state, animate, transition, style } from '@angular/animations';

export const slideInOutAnimation =
	// trigger name for attaching this animation to an element using the [@triggerName] syntax
	trigger('slideInOutAnimation', [
		transition(':enter', [
			style({right: '-400%'}),
			animate('.5s ease-in-out', style({right: 0}))
		]),

		// route 'leave' transition
		transition(':leave', [
			animate('.5s ease-in-out', style({
				right: '-400%'
			}))
		])
	]);
