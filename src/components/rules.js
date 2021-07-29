import { useState } from "react";

export const Rules = () => {
  const [isShow, setShow] = useState(false);

  return isShow ? (
    <div
      className="fixed z-10 bg-yellow-50 w-auto h-auto overflow-y-scroll mx-4 p-4 border-dotted border-2 border-yellow-400 rounded-xl"
      onClick={() => {
        setShow(false);
      }}
    >
      <h1 className="sticky bg-yellow-100 font-bold text-xl text-center rounded-xl">
        Rules
      </h1>
      <ol className="list-disc pt-4">
        <li className="list-inside break-words overflow-ellipsis overflow-hidden p-0.5">
          A decoding board, with a shield at one end covering a row of four
          large holes, and twelve (or ten, or eight, or six) additional rows
          containing four large holes next to a set of four small holes
        </li>
        <li className="list-inside break-words overflow-ellipsis overflow-hidden p-0.5">
          Code pegs of six different colors (or more; see Variations below),
          with round heads, which will be placed in the large holes on the
          board; and
        </li>
        <li className="list-inside break-words overflow-ellipsis overflow-hidden p-0.5">
          Key pegs, some colored black, some white, which are flat-headed and
          smaller than the code pegs; they will be placed in the small holes on
          the board.
        </li>
      </ol>
      <h1 className="m-auto text-center font-semibold uppercase">Click anywhere on this to close it.</h1>
    </div>
  ) : (
    <h1
      className="fixed z-10 right-4 w-max py-2 px-4 m-auto bg-yellow-100 font-semibold text-xl text-center rounded-xl"
      onClick={() => {
        setShow(true);
      }}
    >
      Rules
    </h1>
  );
};
