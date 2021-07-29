import { createStore } from "redux";
import { gameReducer } from "./gameReducer";

export const initialState = {
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

export const store = createStore(gameReducer);


