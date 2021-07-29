import { Circle } from "./Circle";
import { HintCircle } from "./HintCircle";
import React from "react";
import { useDispatch } from "react-redux";
import { SubmitButton } from "./SubmitButton";

export const Row = (props) => {
  let showButton = false;
  let stack = [],
    hints = [];
  const arr = props.stack;

  let style =
    "p-2 mb-2 flex flex-row justify-evenly  rounded-xl";

  if (!props.current) {
    style += " opacity-50";
  } else {
    style += " border-gray-200 border-2 ";
  }

  if (props.stack.length < 4) {
    // rows after current
    // push into stack
    props.stack.map((e, i) =>
      stack.push(
        <Circle key={e.id} id={e.id} color={e.color} current={props.current} />
      )
    );
    // if 2 then push 2 more
    for (let i = 0; i < 4; i++) {
      if (!stack[i]) {
        stack.push(
          <Circle
            key={props.stack.length + i + 1}
            id={props.stack.length + i + 1}
            color=""
            current={props.current}
          />
        );
      }
    }
    for (let i = 0; i < 4; i++) {
      hints.push(<HintCircle key={i} id={i} res={3} />);
    }
  } else {
    // current and previous rows
    props.stack.map((e, i) =>
      stack.push(
        <Circle key={e.id} id={e.id} color={e.color} current={props.current} />
      )
    );
    if (props.hints.length > 0) {
      props.hints.map((e, i) =>
        hints.push(<HintCircle key={i} id={i} res={e} />)
      );
    } else {
      for (let i = 0; i < 4; i++) {
        hints.push(<HintCircle key={i} id={i} res={3} />);
      }
    }

    const emptyCircle = stack.filter((e) => e.props.color !== "");

    showButton = emptyCircle.length === 4;
  }

  return (
    <div className={style}>
      <div className="decodeRow justify-evenly flex-grow flex flex-row ">
        {stack}
      </div>
      {props.current && showButton ? (
        <div className="w-8 h-8 mx-2 flex">
          <SubmitButton />
        </div>
      ) : (
        <div className="w-8 h-8 mx-2 flex"></div>
      )}
      <div className="hintsRow w-8 h-8 grid grid-cols-2 justify-items-center items-center">
        {hints}
      </div>
    </div>
  );
};
