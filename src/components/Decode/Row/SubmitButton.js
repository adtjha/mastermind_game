import { CheckCircleIcon } from "@heroicons/react/solid";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  clear_stack,
  getCode,
  getStack,
  set_solved,
  update_chance,
} from "../../../store";

/**
 * 0 - { color: true, position: false } - white - colorNoPos
 * 1 - { color: true, position: true } - black - colorPos
 * 2 - { color: false, postion: false } - x
 * 3 - { empty state }
 */

export const SubmitButton = () => {
  const stack = useSelector(getStack);
  const code = useSelector(getCode);
  const dispatch = useDispatch();

  return (
    <React.Fragment>
      <CheckCircleIcon
        className="h-5 w-5 text-black m-auto"
        onClick={() => {
          let stackColors = stack.map((e) => e.color);
          let stackColorsPreserved = stackColors.slice();
          let colorNoPos = [];
          let colorSet = {
            red: 0,
            yellow: 0,
            green: 0,
            blue: 0,
            purple: 0,
            pink: 0,
          };

          let colorPos = [];
          stackColorsPreserved.forEach((e, i) => {
            if (code[i] === e) {
              colorPos.push(e);
              stackColors.splice(0, 1);
            }
          });

          code.forEach((e) => (colorSet[e] += 1));

          stackColors.forEach((e, i) => {
            if (
              code.indexOf(e) !== -1 &&
              code.indexOf(e) !== i &&
              colorSet[e] !== 0
            ) {
              colorSet[e] -= 1;
              colorNoPos.push(e);
              stackColors.splice(i, 1);
            }
          });

          let hints = [];
          colorPos.forEach((e) => hints.push(1));
          colorNoPos.forEach((e) => hints.push(0));
          for (var i = 0; i < 4; i++) {
            hints[i] =
              hints[i] === null || hints[i] === undefined ? 2 : hints[i];
          }
          
          dispatch(update_chance({ stack: stack, hints: hints }));
          dispatch(clear_stack());
          if (hints.every((e) => e === 1)) {
            dispatch(set_solved());
          }
        }}
      />
    </React.Fragment>
  );
};
