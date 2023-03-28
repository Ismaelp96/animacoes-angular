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
    animate('0.3s ease-out', style({ transform: 'translateY(2px)' })),
    animate(100),
  ]),
]);
