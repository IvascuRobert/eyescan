import { createReducer, on } from '@ngrx/store';
import { StatisticsActions } from './statistics.actions';

export interface StatisticsState {
  error: string;
}

export const initialState: StatisticsState = {
  error: '',
};

export const statisticsReducer = createReducer(
  initialState,
);
