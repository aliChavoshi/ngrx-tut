import { Action } from '@ngrx/store';
import { ITutorial } from 'src/app/models/tutorial';

export enum TutorialTypeNames {
  ADD_TUTORIAL = '[TUTORIAL] ADD',
  REMOVE_TUTORIAL = '[TUTORIAL] REMOVE',
  EDIT_TUTORIAL = '[TUTORIAL] EDIT',
}

export class AddTutorial implements Action {
  type: string = TutorialTypeNames.ADD_TUTORIAL;
  constructor(public payload: ITutorial) {}
}

export class RemoveTutorial implements Action {
  type: string = TutorialTypeNames.REMOVE_TUTORIAL;
  constructor(public payload: number) {}
}

export class EditTutorial implements Action {
  type: string = TutorialTypeNames.EDIT_TUTORIAL;
  constructor(public payload: ITutorial, public index: number) {}
}
export type ActionsTutorial = RemoveTutorial | AddTutorial | EditTutorial;
