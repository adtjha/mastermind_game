import "./styles.css";

const title = (
  <div className="title">
    <h1>Mastermind</h1>
  </div>
);
const rules = <div className="rules">Rules ... </div>;
const decodingBoard = <div className="decodingBoard"></div>;
const codePegs = <div className="codePegs"></div>;
const endGame = <div className="endGame"></div>;
export default function App() {
  return (
    <div className="App">
      {title}
      {rules}
      {decodingBoard}
      {codePegs}
      {endGame}
    </div>
  );
}
