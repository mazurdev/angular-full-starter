import {animate, style, transition, trigger} from '@angular/animations';
import {VARIABLES} from '@shared/helpers/variables';

// vars
const easing3 = VARIABLES.EASING_3;
const easing6 = VARIABLES.EASING_6;

export const animations = [

  trigger(
    'showing', [
      transition(':enter', [
        style({opacity: 0}),
        animate(`${easing6}`, style({opacity: 1}))
      ]),
      transition(':leave', [
        style({opacity: 1}),
        animate(`${easing6}`, style({opacity: 0}))
      ])
    ]
  ),

  trigger(
    'showingImagePreview', [
      transition(':enter', [
        style({
          opacity: 0,
          transform: 'translateY(-150%)'
        }),
        animate(`${easing3}`, style({
          opacity: 1,
          transform: 'translateY(0)'
        }))
      ]),
      transition(':leave', [
        style({
          opacity: 1,
          transform: 'translateY(0)'
        }),
        animate(`${easing3}`, style({
          opacity: 0,
          transform: 'translateY(150%)'
        }))
      ])
    ]
  )

];
