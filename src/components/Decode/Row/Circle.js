import { useDispatch, useSelector } from "react-redux";
import { getSelectedColor, update_stack } from "../../../store";

export const Circle = (props) => {
  const selectedColor = useSelector(getSelectedColor);
  const dispatch = useDispatch();
  let color = props.color;

  let style = "w-8 h-8 p-2 rounded-full mx-2";
  let colorStyled = "",
    empty = "";

  if (color) {
    colorStyled = " bg-" + color + "-400";
  } else {
    empty = " bg-transparent border-2 border-dotted border-gray-400";
  }

  const handleClick = (e) => {
    if (props.current && selectedColor.length > 0) {
      if (color.length === 0) {
        // un color -> colored
        dispatch(
          update_stack({
            id: props.id,
            color: selectedColor,
          })
        );
      } else {
        // colored -> un color
        dispatch(
          update_stack({
            id: props.id,
            color: "",
          })
        );
      }
    } else {
      // DO NOTHING
    }
  };

  return (
    <div
      key={color}
      className={style + colorStyled + empty}
      onClick={handleClick}
    ></div>
  );
};
