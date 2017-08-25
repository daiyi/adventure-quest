import { SET_NAME, GOTO_ROOM } from './actions'

export default function rooms(state = [], action) {
  switch (action.type) {
    case SET_NAME:
      return [
        ...state,
        {
          playerName: action.text,
        }
      ];

    case GOTO_ROOM:
      return [
        ...state,
        {
          text: action.text,
          room: "Dungeon1"
        }
      ];
    default:
      return state
  }
}