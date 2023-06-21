import { createActionGroup, emptyProps, props } from '@ngrx/store';

export const StatisticsActions = createActionGroup({
  source: 'Statistics',
  events: {
    'Statistics Statisticss': emptyProps(),
    'Statistics Statisticss Success': props<{ data: unknown }>(),
    'Statistics Statisticss Failure': props<{ error: unknown }>(),
  }
});
