import { XIcon } from "@heroicons/react/solid";


export const HintCircle = (props) => {
  return props.res === 0 ? (
    <div className="w-3 h-3 bg-white rounded-full border-2 border-black"></div>
  ) : props.res === 1 ? (
    <div className="w-3 h-3 bg-black rounded-full border-2 border-black"></div>
  ) : props.res === 2 ? (
    <XIcon className="w-3 h-3 font-bold stroke-2 border-2 border-black rounded-full"></XIcon>
  ) : (
    <div className="w-3 h-3 bg-transparent rounded-full border-2 border-black"></div>
  );
};
