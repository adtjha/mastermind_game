import { useDispatch, useSelector } from "react-redux";
import { getSelectedColor, update_selected } from "../store";

const color = ["red", "yellow", "green", "blue", "purple", "pink"];

const ColorSelector = (props) => {
  const dispatch = useDispatch();
  const selected = useSelector(getSelectedColor);
  let style = "w-8 h-8 rounded-full p-4 my-4 mx-auto " + " bg-" + props.color + "-400"

  if (selected === props.color) {
    style += " border-2 border-black"
  }

  return (
    <div
      className={style}
      onClick={(e) => dispatch(update_selected(props.color))}
    ></div>
  );
};

export const codePegs = (
  <div className="codePegs w-16 h-full m-4 border-gray-400 border-2 border-dotted rounded-xl">
    <div className="py-4 flex flex-col justify-items-center">
      {color.map((e,i) => (
        <ColorSelector key={i} color={e} />
      ))}
    </div>
  </div>
);
