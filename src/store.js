import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

const initialState = {
  ended: false,
  solved: false,
  selected: [],
  stack: [
    { id: 1, color: "" },
    { id: 2, color: "" },
    { id: 3, color: "" },
    { id: 4, color: "" },
  ],
  chances: [
    {
      stack: [
        { id: 1, color: "red" },
        { id: 2, color: "green" },
        { id: 3, color: "blue" },
        { id: 4, color: "yellow" },
      ],
      hints: [0, 1, 2, 2],
    },
  ],
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
export const ADD_CHANCE = "addChance";

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
    stack,
    hints,
  },
});
