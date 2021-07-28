import { codePegs } from "./components/codePegs";
import { endGame } from "./components/endGame";
import { DecodingBoard } from "./components/decodingBoard";
import { rules } from "./components/rules";
import { title } from "./components/title";

export default function App() {
  return (
    <div className="bg-yellow-50">
      {title}
      {rules}
      <div className="h-max flex flex-row justify-items-center">
        <DecodingBoard />
        {codePegs}
      </div>
      {endGame}
    </div>
  );
}
