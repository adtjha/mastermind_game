import { CheckCircleIcon, XIcon } from "@heroicons/react/solid";
/**
 * 0 - { color: true, position: false } - white
 * 1 - { color: true, position: true } - black
 * 2 - { color: false, postion: false } - x
 * 3 - { empty state }
 */
export const colorIn = ["red", "green", "blue", "yellow"];
export const hints = [0, 1, 2, 2];

const submitButton = (
  <div className="submitButton w-8 h-8 mx-2 flex ">
    <CheckCircleIcon className="h-5 w-5 text-black m-auto" />
  </div>
);

export const Row = (props) => {
  let showButton = false;
  let stack = [],
    hints = [];
  const arr = props.stack;

  if (props.stack.length < 4) {
    // push into stackList
    props.stack.map((e, i) => stack.push(<Circle id={i} color={e} />));
    // if 2 then push 2 more
    for (let i = 0; i < 4 - props.stack.length; i++) {
      stack.push(<Circle id={props.stack.length + i + 1} color="" />);
    }
    for (let i = 0; i < 4; i++) {
      hints.push(<HintCircle id={i} res={3} />);
    }
    console.log(stack);
  } else {
    props.stack.map((e, i) => stack.push(<Circle id={i} color={e} />));
    props.hints.map((e, i) => hints.push(<HintCircle id={i} res={e} />));
    showButton = true;
  }

  return (
    <div className="p-2 mb-2 flex flex-row justify-evenly border-gray-400 border-2 border-dotted rounded-xl">
      <div className="decodeRow justify-evenly flex-grow flex flex-row ">
        {stack}
      </div>
      {props.current && showButton ? submitButton : ""}
      <div className="hintsRow w-8 h-8 grid grid-cols-2 justify-items-center items-center">
        {hints}
      </div>
    </div>
  );
};

export const Circle = (props) => {
  let style = "w-8 h-8 p-2 rounded-full mx-2";

  if (props.color) {
    style += " bg-" + props.color + "-400";
  } else {
    style += "bg-gray-100 border-2 border-dotted border-gray-400";
  }

  const handleClick = (e) => {
    if (props.current) {
      // fill color
      // dispatch action
    } else {
      // DO NOTHING
    }
  };

  return <div key={props.color} className={style} onClick={handleClick}></div>;
};

export const HintCircle = (props) => {
  return props.res === 0 ? (
    <div className="w-3 h-3 bg-white rounded-full border-2 border-black"></div>
  ) : props.res === 1 ? (
    <div className="w-3 h-3 bg-black rounded-full border-2 border-black"></div>
  ) : props.res === 2 ? (
    <XIcon className="w-3 h-3 font-bold stroke-2 border-2 border-black rounded-full"></XIcon>
  ) : (
    <div className="w-3 h-3 bg-white rounded-full border-2 border-black"></div>
  );
};
