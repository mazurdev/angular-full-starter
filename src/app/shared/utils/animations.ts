import {animate, state, style, transition, trigger} from '@angular/animations';

export const animations = [
  trigger('visibilityChanged', [
    state('shown', style({
      display: 'block',
      opacity: 1
    })),
    state('hidden', style({
      display: 'none',
      opacity: 0
    })),
    transition('shown => hidden', animate('.2s')),
    transition('hidden => shown', animate('.2s')),
  ]),

  trigger('EnterLeave', [
    state('flyIn', style({
      transform: 'translateX(0)'
    })),
    transition(':enter', [
      style({transform: 'translateX(-100%)'}),
      animate('0.5s 300ms ease-in')]),
    transition(':leave', [
      animate('0.3s ease-out', style({
        transform: 'translateX(100%)'
      }))
    ])])
];
