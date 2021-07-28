import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

const initialState = {
  ended: false,
  solved: false,
  selected: [],
  stack: [],
  chances: [
    {
      stack: ["red", "green", "blue", "yellow"],
      hints: [0, 1, 2, 2],
    },
  ],
};

// reducers
export const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECTED:
      return { ...state, selected: action.payload };
    case STACK:
      return { ...state, stack: action.payload };
    case FINISH:
      return { ...state, ended: action.payload };
    case SOLVED:
      return { ...state, solved: action.payload };
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

// action types
export const STACK = "updateStack";
export const SELECTED = "updateSelected";
export const FINISH = "finished";
export const SOLVED = "solved";

// action creators
export const update_stack = (state) => ({
  type: STACK,
  payload: state,
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
