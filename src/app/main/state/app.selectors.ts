import { createFeatureSelector, createSelector } from '@ngrx/store';
import { EyescanState } from './app.reducer';

export const selectEyescanState =
  createFeatureSelector<EyescanState>('eyescan');

export const selectToggleDrawer = createSelector(
  selectEyescanState,
  (state: EyescanState) => state.toggleDrawer
);
