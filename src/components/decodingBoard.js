import { Row } from "./row";
import { useDispatch, useSelector } from "react-redux";
import {
  getCurrent,
  getPrevRows,
  getSelectedColor,
  getStack,
  set_finished,
} from "../store";

export const DecodingBoard = () => {
  let rows = [];

  const prevRows = useSelector(getPrevRows);
  const selected = useSelector(getSelectedColor);
  const stack = useSelector(getStack);

  const dispatch = useDispatch();

  if (prevRows.length < 10) {
    // rows before current row
    rows = prevRows.map((e, i) => (
      <Row
        id={i}
        stack={e.stack}
        hints={e.hints}
        current={i === rows.length - 1 ? true : false}
      />
    ));

    // current row
    rows.push(
      <Row
          id={prevRows.length}
          stack={stack}
          hints={[]}
          current={true}
        />
    )
    
    //  rows after current row
    for (let i = 1; i < 10 - prevRows.length; i++) {
      rows.push(
        <Row
          id={i + prevRows.length}
          stack={[]}
          hints={[]}
          current={false}
        />
      );
    }

  } else {
    dispatch(set_finished());
  }

  console.log(rows);
  return (
    <div className="decodingBoard flex-grow w-auto h-12 ml-4 my-4 mr-2">{rows}</div>
  );
};
