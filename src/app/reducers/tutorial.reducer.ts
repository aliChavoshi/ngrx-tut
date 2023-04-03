import { ITutorial } from '../models/tutorial';
import {
  ActionsTutorial,
  EditTutorial,
  RemoveTutorial,
  TutorialTypeNames,
} from './../actions/tutorial.action';

const initialState: ITutorial = {
  name: 'initial Tutorial',
  url: 'https://www.google.com',
};

export function reducer(
  state: ITutorial[] = [initialState],
  action: ActionsTutorial
): ITutorial[] {
  switch (action.type) {
    case TutorialTypeNames.ADD_TUTORIAL:
      return [...state, action.payload as ITutorial];
    case TutorialTypeNames.REMOVE_TUTORIAL:
      var index = action.payload as number;
      const item = state[index];
      return state.filter((x) => x.name !== item.name);
    case TutorialTypeNames.EDIT_TUTORIAL:
      var { index, payload } = action as EditTutorial;
      return state.map((tutorial, i) =>
        i === index ? { ...tutorial, ...payload } : tutorial
      );
    default:
      return state;
  }
}
