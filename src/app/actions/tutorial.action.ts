import { Action } from '@ngrx/store';
import { ITutorial } from 'src/app/models/tutorial';

export enum TutorialTypeNames {
  ADD_TUTORIAL = '[TUTORIAL] ADD',
  REMOVE_TUTORIAL = '[TUTORIAL] REMOVE',
}

/* It's a class that implements the Action interface */
export class AddTutorial implements Action {
  type: string = TutorialTypeNames.ADD_TUTORIAL;
  constructor(public payload: ITutorial) {}
}

export class RemoveTutorial implements Action {
  type: string = TutorialTypeNames.REMOVE_TUTORIAL;
  constructor(public payload: number) {}
}
export type Actions = RemoveTutorial | AddTutorial;
