import { Menu, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/solid";
import { Fragment } from "react";

export const Rules = () => {
  return (
    <div>
      <Menu>
        <Menu.Button className="m-auto w-full mb-4">
          <h1 className="relative opacity-80 right-4 w-max py-2 px-4 m-auto bg-yellow-100 text-yellow-800 font-semibold text-xl text-center rounded-xl">
            Rules
          </h1>
        </Menu.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items>
            <div className="bg-yellow-50 h-auto mx-4 p-4 border-dotted border-2 border-yellow-400 rounded-xl">
              <Menu.Item>
                <ol className="list-disc">
                  <li className="list-inside break-words overflow-ellipsis overflow-hidden p-0.5">
                    A decoding board, with a shield at one end covering a row of
                    four large holes, and twelve (or ten, or eight, or six)
                    additional rows containing four large holes next to a set of
                    four small holes
                  </li>
                  <li className="list-inside break-words overflow-ellipsis overflow-hidden p-0.5">
                    Code pegs of six different colors (or more; see Variations
                    below), with round heads, which will be placed in the large
                    holes on the board; and
                  </li>
                  <li className="list-inside break-words overflow-ellipsis overflow-hidden p-0.5">
                    Key pegs, some colored black, some white, which are
                    flat-headed and smaller than the code pegs; they will be
                    placed in the small holes on the board.
                  </li>
                </ol>
              </Menu.Item>
              <Menu.Item>
                <div className="w-full flex m-2">
                  <a
                    href="https://en.wikipedia.org/wiki/Mastermind_(board_game)"
                    target="_blank"
                    className="m-auto text-center font-normal underline"
                  >
                    Read more on Wikipedia
                  </a>
                </div>
              </Menu.Item>
              <Menu.Item>
                <XIcon className="h-5 w-5 text-black m-auto cursor-pointer" />
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};
