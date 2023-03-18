import { ITutorial } from '../models/tutorial';
import * as TutorialActions from './../actions/tutorial.action';

const initialState: ITutorial = {
  id: 1,
  name: 'initial Tutorial',
  url: 'https://www.google.com',
};

export function reducer(
  state: ITutorial[] = [initialState],
  action: TutorialActions.Actions
): ITutorial[] {
  switch (action.type) {
    case TutorialActions.TutorialTypeNames.ADD_TUTORIAL:
      return [...state, action.payload as ITutorial];

    default:
      return state;
  }
}
