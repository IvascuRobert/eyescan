import { createSelector } from '@ngrx/store';
import { AppState } from './app.reducer';

export const selectAppState = (state: AppState) => state;

export const selectToggleDrawer = createSelector(
    selectAppState,
    (state: AppState) => state.toggleDrawer
);