import {animate, style, transition, trigger} from '@angular/animations';

// vars
const easing = '.6s cubic-bezier(.55,.085,.68,.53)';

export const showing = trigger('showing', [
    transition(':enter', [
      style({opacity: 0}),
      animate(`${easing}`, style({opacity: 1}))
    ]),
    transition(':leave', [
      style({opacity: 1}),
      animate(`${easing}`, style({opacity: 0}))
    ])
  ]
);

