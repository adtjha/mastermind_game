import { Pegs } from "./components/Pegs";
import { EndGame, endGame } from "./components/endGame";
import { DecodingBoard } from "./components/Decode";
import { Rules } from "./components/rules";
import { title } from "./components/title";
import { useEffect } from "react";
import { set_code } from "./components/Store/action/creator";
import { getEnd, getPegs, getSolved } from "./components/Store/selectors";
import { useSelector, useDispatch } from "react-redux";

export default function App() {
  const pegsColor = useSelector(getPegs);
  const hasEnded = useSelector(getEnd);
  const hasSolved = useSelector(getSolved);
  const dispatch = useDispatch();

  useEffect(() => {
    const randomArr = [1, 2, 3, 4].map((e) => Math.ceil(Math.random() * 6));
    const colorArr = randomArr.map((e) => pegsColor[e - 1]);
    dispatch(set_code(colorArr));
  }, []);

  return (
    <div className="bg-yellow-50 w-screen max-h-screen">
      <div className="bg-yellow-50 h-auto md:h-max md:max-w-lg md:m-auto">
        {title}
        <Rules />
        <div className="h-full mt-4 flex flex-row justify-items-center">
          <DecodingBoard />
          <Pegs />
        </div>
      </div>
        {hasSolved ? (
          <EndGame word="Code Solved" />
        ) : hasEnded ? (
          <EndGame word="Game Ended" />
        ) : (
          ""
        )}
    </div>
  );
}
