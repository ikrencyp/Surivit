import { trigger, transition, query, style, animate } from '@angular/animations';

export const FADE_ANIMATION = trigger('FADE_ANIMATION', [
  transition('* => *', [
    query(':enter',
      [
        style({ opacity: 0 })
      ],
      { optional: true }
    ),
    query(':leave',
      [
        style({ opacity: 1 }),
        animate('0.2s', style({ opacity: 0 }))
      ],
      { optional: true }
    ),
    query(':enter',
      [
        style({ opacity: 0 }),
        animate('0.2s', style({ opacity: 1 }))
      ],
      { optional: true }
    )
  ])
]);
