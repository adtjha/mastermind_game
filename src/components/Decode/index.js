import { Row } from "./Row";
import { useDispatch, useSelector } from "react-redux";
import {
  getCurrent,
  getPrevRows,
  getSelectedColor,
  getStack,
  set_finished,
} from "../../store";

export const DecodingBoard = () => {
  let rows = [];

  const prevRows = useSelector(getPrevRows);
  const selected = useSelector(getSelectedColor);
  const stack = useSelector(getStack);

  const dispatch = useDispatch();

  if (prevRows.length < 10) {
    // rows before current row
    rows = prevRows.map((e, i) => (
      <Row key={i} id={i} stack={e.stack} hints={e.hints} current={false} />
    ));

    // current row
    rows.push(
      <Row
        key={prevRows.length}
        id={prevRows.length}
        stack={stack}
        hints={[]}
        current={true}
      />
    );

    //  rows after current row
    for (let i = 1; i < 10 - prevRows.length; i++) {
      rows.push(
        <Row
          key={i + prevRows.length}
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

  return (
    <div className="decodingBoard flex-grow w-auto h-full ml-4 my-4 mr-2">
      {rows}
    </div>
  );
};
