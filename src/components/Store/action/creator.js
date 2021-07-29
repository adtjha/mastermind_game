import { initialState } from "..";
import { STACK, SELECTED, FINISH, SOLVED, ADD_CHANCE, SET_CODE, CLEAR_STACK, RESET } from "./types";


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
