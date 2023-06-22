import { createReducer, on } from '@ngrx/store';
import { AppActions } from './app.actions';

export const appFeatureKey = 'app';

export interface AppState {
  toggleDrawer: boolean | null;
}

export const initialState: AppState = {
  toggleDrawer: true,
};

export const appReducer = createReducer(
  initialState,
  on(AppActions.appToggleDrawer, (state) => {
    return {
      ...state,
      toggleDrawer: !state.toggleDrawer
    }
  })
);

