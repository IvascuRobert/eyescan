import { createReducer, on } from '@ngrx/store';
import { StatisticsActions } from './statistics.actions';

export interface State {
  error: string;
}

export const initialState: State = {
  error: '',
};

export const statisticsReducer = createReducer(
  initialState,
);
