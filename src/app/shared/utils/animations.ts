import {animate, state, style, transition, trigger} from '@angular/animations';

// variables
const easing = '.6s cubic-bezier(.55,.085,.68,.53)';
const timings = '.6s';

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
    transition('shown => hidden', animate(`${timings}`)),
    transition('hidden => shown', animate(`${timings}`)),
  ]),

  trigger(
    'showing', [
      transition(':enter', [
        style({opacity: 0}),
        animate(`${easing}`, style({opacity: 1}))
      ]),
      transition(':leave', [
        style({opacity: 1}),
        animate(`${easing}`, style({opacity: 0}))
      ])
    ]
  )
];
