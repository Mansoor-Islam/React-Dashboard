import React from "react";

import { Props } from "../Model";

import { Link } from "react-router-dom";

import { IoMdClose } from "react-icons/io";
import { Transition } from "@headlessui/react";

import SidebarMenu from "./SidebarMenu";

const Sidebar: React.FC<Props> = ({ isClosed, setClosed, isStatic }) => {
  return (
    <>
      <Transition
        show={isStatic || !isClosed}
        enter="all duration-500"
        enterFrom="-ml-64"
        enterTo="ml-0"
        leave="transition-all duration-500"
        leaveTo="-ml-64"
      >
        <aside
          className={`z-50 bg-primary text-white w-64 min-h-screen flex-col ${
            isStatic ? "" : "fixed"
          }`}
        >
          <div className="flex justify-around ">
            <span className="block text-xl sm:text-3xl font-bold px-10 py-4">
              <Link to="/">Humblr.</Link>
            </span>
            {!isStatic && (
              <button onClick={() => setClosed(true)}>
                <IoMdClose
                  className="text-3xl font-bold"
                  aria-label="close menu"
                  title="Close menu"
                />
              </button>
            )}
          </div>

          <hr className="border-gray-400 w-10/12 m-auto" />

          <SidebarMenu
            isClosed={isClosed}
            setClosed={setClosed}
            isStatic={isStatic}
          />
        </aside>
      </Transition>

      <Transition appear={true} show={!isStatic && !isClosed}>
        <div className="fixed inset-0 bg-gray-800 opacity-60" />
      </Transition>
    </>
  );
};

export default Sidebar;
