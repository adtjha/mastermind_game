import { useDispatch, useSelector } from "react-redux";
import { getSelectedColor, update_stack } from "../store";

export const Circle = (props) => {
  const selectedColor = useSelector(getSelectedColor);
  const dispatch = useDispatch();

  let style = "w-8 h-8 p-2 rounded-full mx-2";
  let colorStyled = "",
    empty = "";

  if (props.color) {
    colorStyled = " bg-" + props.color + "-400";
  } else {
    empty = " bg-transparent border-2 border-dotted border-gray-400";
  }

  const handleClick = (e) => {
    if (props.current) {
      // fill color
      // colorStyled = " bg-" + selectedColor + "-400";
      // empty = "";
      // dispatch action
      dispatch(
        update_stack({
          id: props.id,
          color: selectedColor,
        })
      );
    } else {
      // DO NOTHING
    }
  };

  return (
    <div
      key={props.color}
      className={style + colorStyled + empty}
      onClick={handleClick}
    ></div>
  );
};
