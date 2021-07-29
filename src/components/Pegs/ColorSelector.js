import { useDispatch, useSelector } from "react-redux";
import { update_selected } from "../Store/action/creator";
import { getSelectedColor } from "../Store/selectors";

export const ColorSelector = (props) => {
  const dispatch = useDispatch();
  const selected = useSelector(getSelectedColor);
  let classTags =
    "w-8 h-8 rounded-full p-4 my-4 mx-auto cursor-pointer" +
    " bg-" +
    props.color +
    "-400";

  if (selected === props.color) {
    classTags += " border-2 border-black";
  }

  return (
    <div
      className={classTags}
      onClick={(e) => dispatch(update_selected(props.color))}
    ></div>
  );
};
