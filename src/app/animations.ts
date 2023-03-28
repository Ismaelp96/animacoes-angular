import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const highlightedStateTrigger = trigger('highlightedState', [
  state('default', style({})),
  state(
    'highlighted',
    style({
      border: '2px solid #b2b6FF',
      filter: 'brightness(97%)',
    })
  ),
  transition('default => highlighted', [
    animate('2ms ease-out', style({ transform: 'translateY(2px)' })),
    animate(200),
  ]),
]);

export const shownStateTrigger = trigger('shownState', [
  transition(':enter', [
    style({
      opacity: 0,
      PointerEvent: 'none',
    }),
    animate(300, style({ opacity: 1, PointerEvent: 'all' })),
  ]),
  transition(':leave', [
    animate(
      300,
      style({
        opacity: 0,
      })
    ),
  ]),
]);
