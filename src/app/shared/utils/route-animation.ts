import {trigger, animate, transition, style, query} from '@angular/animations';

const easing = '.6s cubic-bezier(1, .26, 0, 1)';

export const routeAnimations = trigger('routeAnimations', [

  transition('* => *', [

    query(':enter',
      [
        style({opacity: 0})
      ],
      {optional: true}
    ),

    query(':leave',
      [
        style({opacity: 1}),
        animate(`${easing}`, style({opacity: 0}))
      ],
      {optional: true}
    ),

    query(':enter',
      [
        style({opacity: 0}),
        animate(`${easing}`, style({opacity: 1}))
      ],
      {optional: true}
    )

  ])

]);
