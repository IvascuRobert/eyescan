import { createReducer, on } from '@ngrx/store';
import { EyescanActions } from './app.actions';

export interface EyescanState {
  toggleDrawer: boolean | null;
}

export const initialState: EyescanState = {
  toggleDrawer: true,
};

export const eyescanReducer = createReducer(
  initialState,
  on(EyescanActions.offcanvasToggleDrawer, (state) => {
    return {
      ...state,
      toggleDrawer: !state.toggleDrawer,
    };
  })
);
