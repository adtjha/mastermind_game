import { useDispatch, useSelector } from "react-redux";
import { getSelectedColor, update_selected } from "../../store";

export const ColorSelector = (props) => {
  const dispatch = useDispatch();
  const selected = useSelector(getSelectedColor);
  let style = "w-8 h-8 rounded-full p-4 my-4 mx-auto " + " bg-" + props.color + "-400";

  if (selected === props.color) {
    style += " border-2 border-black";
  }

  return (
    <div
      className={style}
      onClick={(e) => dispatch(update_selected(props.color))}
    ></div>
  );
};
