import React from "react";

import { Props } from "../Model";

import { GiHamburgerMenu } from "react-icons/gi";
import { GoSearch } from "react-icons/go";

const Navbar: React.FC<Props> = ({ isClosed, setClosed, isStatic }) => {
  return (
    <>
      <header className=" h-16 sm:h-15 bg-white border-b shadow flex items-center justify-center px-2">
        {!isStatic && isClosed && (
          <button onClick={() => setClosed(false)} className="w-10 p-1">
            <GiHamburgerMenu
              className="text-primary text-2xl"
              aria-label="open menu"
              title="Open menu"
            />
          </button>
        )}

        <div className="flex flex-grow items-center justify-between px-3">
          <h1 className="text-sm sm:text-2xl text-gray-700 font-bold">
            Hello Adam!
          </h1>

          <div className="flex justify-end sm:justify-around items-center w-5/12">
            <div className="relative hidden sm:block">
              <input
                placeholder="Search.."
                className="w-36 sm:w-48 lg:w-96 pl-4 pr-10 py-1 sm:py-1.5 rounded  bg-gray-100 focus:outline-none"
              />
              <GoSearch className="absolute top-2 right-2 text-lg text-gray-600" />
            </div>
            <img
              src="https://mansoor-islam.github.io/images/avatar.png"
              alt="user avatar"
              className="h-10 w-10 sm:cursor-pointer"
            />
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
