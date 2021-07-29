import { useDispatch } from "react-redux";
import { reset_game } from "./Store/action/creator";

export const EndGame = (props) => {
const dispatch = useDispatch()
    
  return (
    <div className="endGame flex -my-96 p-4">
      <div className="z-0 fixed h-screen top-0 bottom-0 left-0 right-0 bg-black opacity-75"></div>
      <div className="w-auto h-auto z-10 m-auto rounded-xl shadow-xl relative bg-gradient-to-r from-yellow-400 via-green-500 to-yellow-500 flex flex-col">
        <h1 className="p-4 font-bold m-auto text-6xl text-white">
          {props.word}
        </h1>
        <div className="w-full h-1/2 flex">
          <button
            className="py-2 px-4 my-8 mx-auto bg-green-400 text-green-900 text-xl rounded-xl shadow-lg"
            onClick={() => {
              dispatch(reset_game());
            }}
          >
            New Game
          </button>
        </div>
      </div>
    </div>
  );
};
