import {transition, trigger, query, style, animate, group} from '@angular/animations';
import {VARIABLES} from '@shared/helpers/variables';

const easing = VARIABLES.EASING_3;

export const routeAnimation =

  trigger('routeAnimation', [

    transition( '* => *', [

      // GROUP - base state
      group([

        query(':enter', [
          style({opacity: 0}),
          animate(`${easing}`, style({opacity: 1}))
        ], {optional: true}),

        query(':leave', [
          style({opacity: 1}),
          animate(`${easing}`, style({opacity: 0}))
        ], {optional: true})

      ])

    ])

  ]);
