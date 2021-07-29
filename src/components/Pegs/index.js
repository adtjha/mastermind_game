import { useSelector } from "react-redux";
import { getPegs } from "../../store";
import { ColorSelector } from "./ColorSelector";

export const Pegs = () => {
  const color = useSelector(getPegs);

  return (
    <div className="codePegs w-16 h-max m-4 ">
      <div className="py-4 flex flex-col justify-items-center border-gray-400 border-2 border-dotted rounded-xl">
        {color.map((e, i) => (
          <ColorSelector key={i} color={e} />
        ))}
      </div>
    </div>
  );
};
