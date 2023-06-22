import { createActionGroup, emptyProps, props } from '@ngrx/store';

export const AppActions = createActionGroup({
  source: 'App',
  events: {
    'App Apps': emptyProps(),
    'App Apps Success': props<{ data: unknown }>(),
    'App Apps Failure': props<{ error: unknown }>(),
    'App Toggle Drawer': emptyProps(),
  }
});
