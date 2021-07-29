import { initialState } from ".";
import { SELECTED, STACK, FINISH, SOLVED, ADD_CHANCE, CLEAR_STACK, SET_CODE, RESET } from "./action/types";

// reducers

export const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECTED:
      return { ...state, selected: action.payload };
    case STACK: {
      return {
        ...state,
        stack: state.stack.map((e) => e.id === action.payload.id ? { ...e, color: action.payload.color } : e
        ),
      };
    }
    case FINISH:
      return { ...state, ended: action.payload };
    case SOLVED:
      return { ...state, solved: action.payload };
    case ADD_CHANCE:
      return { ...state, chances: [...state.chances, action.payload] };
    case CLEAR_STACK:
      return { ...state, stack: action.payload };
    case SET_CODE:
      return { ...state, code: [...state.code, ...action.payload] };
    case RESET:
      return { ...state, ...initialState };
    default:
      return state;
  }
};
