import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

const initialState = {
  pegs: ["red", "yellow", "green", "blue", "purple", "pink"],
  code: "",
  ended: false,
  solved: false,
  selected: [],
  stack: [
    { id: 1, color: "" },
    { id: 2, color: "" },
    { id: 3, color: "" },
    { id: 4, color: "" },
  ],
  chances: [],
};

// reducers
export const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECTED:
      return { ...state, selected: action.payload };
    case STACK: {
      return {
        ...state,
        stack: state.stack.map((e) =>
          e.id === action.payload.id ? { ...e, color: action.payload.color } : e
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

export const store = createStore(gameReducer, composeWithDevTools());

// selectors
export const getSelectedColor = (state) => state.selected;
export const getStack = (state) => state.stack;
export const getHints = (state) => state.hints;
export const getPrevRows = (state) => state.chances;
export const getPegs = (state) => state.pegs;
export const getCode = (state) => state.code;
export const getEnd = (state) => state.ended;
export const getSolved = (state) => state.solved;

// action types
export const STACK = "updateStack";
export const SELECTED = "updateSelected";
export const FINISH = "finished";
export const SOLVED = "solved";
export const ADD_CHANCE = "addChance";
export const SET_CODE = "setCode";
export const CLEAR_STACK = "clearStack";
export const RESET = "resetGame";

// action creators
export const update_stack = ({ id, color }) => ({
  type: STACK,
  payload: { id, color },
});
export const update_selected = (state) => ({
  type: SELECTED,
  payload: state,
});
export const set_finished = () => ({
  type: FINISH,
  payload: true,
});
export const set_solved = () => ({
  type: SOLVED,
  payload: true,
});
export const update_chance = ({ stack, hints }) => ({
  type: ADD_CHANCE,
  payload: {
    stack: stack,
    hints: hints,
  },
});
export const set_code = (arr) => ({
  type: SET_CODE,
  payload: arr,
});
export const clear_stack = () => ({
  type: CLEAR_STACK,
  payload: [
    { id: 1, color: "" },
    { id: 2, color: "" },
    { id: 3, color: "" },
    { id: 4, color: "" },
  ],
});
export const reset_game = () => ({
  type: RESET,
  payload: initialState,
});
