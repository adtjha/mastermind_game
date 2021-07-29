import { Circle } from "./Circle";
import { HintCircle } from "./HintCircle";
import { CheckCircleIcon } from "@heroicons/react/solid";

export const Row = (props) => {
  let showButton = false;
  let stack = [],
    hints = [];
  const arr = props.stack;

  let style =
    "p-2 mb-2 flex flex-row justify-evenly border-gray-400 border-2 border-dotted rounded-xl";

  if (!props.current) {
    style += " opacity-50";
  }

  if (props.stack.length < 4) {
    // push into stackList
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
    props.stack.map((e, i) =>
      stack.push(
        <Circle key={e.id} id={e.id} color={e.color} current={props.current} />
      )
    );
    props.hints.map((e, i) =>
      hints.push(<HintCircle key={i} id={i} res={e} />)
    );
    showButton = true;
  }

  return (
    <div className={style}>
      <div className="decodeRow justify-evenly flex-grow flex flex-row ">
        {stack}
      </div>
      {props.current && showButton ? (
        <SubmitButton show={props.current && showButton} />
      ) : (
        ""
      )}
      <div className="hintsRow w-8 h-8 grid grid-cols-2 justify-items-center items-center">
        {hints}
      </div>
    </div>
  );
};

/**
 * 0 - { color: true, position: false } - white
 * 1 - { color: true, position: true } - black
 * 2 - { color: false, postion: false } - x
 * 3 - { empty state }
 */

export const SubmitButton = (props) => {
  let style = "w-8 h-8 mx-2 flex ";
  let hide = " hidden ";

  if (!props.show) {
    style += hide;
  }

  return (
    <div className={style}>
      <CheckCircleIcon className="h-5 w-5 text-black m-auto" />
    </div>
  );
};
