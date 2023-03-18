import { ActionReducerMap } from '@ngrx/store';
import { ITutorial } from './models/tutorial';
import * as fromTutorial from './reducers/tutorial.reducer';

export interface AppState {
  tutorial: ITutorial[];
}
export const reducers: ActionReducerMap<AppState> = {
  tutorial: fromTutorial.reducer,
};
