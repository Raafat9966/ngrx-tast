import { createReducer, on } from '@ngrx/store';
import { ControlActions } from './counter.actions';

export const initialState = 0;

export const counterReducer = createReducer(
  initialState,
  on(ControlActions.increment, (state) => state + 1),
  on(ControlActions.decrement, (state) => state - 1),
  on(ControlActions.reset, (state) => 0),
  on(ControlActions.loadArray, (state) => (state = [1, 2, 3]))
);
