import { createAction } from '@ngrx/store';

export const ControlActions = {
  increment: createAction('[Counter Component] Increment'),
  decrement: createAction('[Counter Component] Decrement'),
  reset: createAction('[Counter Component] Reset'),
  loadArray: createAction(
    '[Counter Component] loadArray',
    props<{ arrayLoad }>()
  ),
};
