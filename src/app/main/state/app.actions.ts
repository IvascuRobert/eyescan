import { createActionGroup, emptyProps, props } from '@ngrx/store';

export const EyescanActions = createActionGroup({
  source: 'Eyescan',
  events: {
    'Offcanvas Toggle Drawer': emptyProps(),
  },
});
