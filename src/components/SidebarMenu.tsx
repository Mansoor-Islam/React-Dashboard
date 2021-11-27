import React from "react";

import { Link } from "react-router-dom";

import { Props } from "../Model";

import { BsBarChartFill, BsCreditCard2BackFill } from "react-icons/bs";
import { MdDashboard } from "react-icons/md";
import { FiSettings, FiLogOut } from "react-icons/fi";
import { FaShoppingCart } from "react-icons/fa";

const SidebarMenu: React.FC<Props> = ({ isClosed, setClosed }) => {
  return (
    <>
      <div className="flex-grow border-red-500 py-10">
        <nav>
          <ul className="ml-3 sm:ml-7">
            <li
              onClick={() => setClosed(true)}
              className="p-3 w-5/6 rounded-md hover:bg-hoverColor"
            >
              <Link to="/dashboard" className="flex items-center">
                <BsBarChartFill className="mx-2 text-lg" />
                Dashboard
              </Link>
            </li>

            <li
              onClick={() => setClosed(true)}
              className="p-3 w-5/6 rounded-md hover:bg-hoverColor"
            >
              <Link to="/orders" className="flex items-center">
                <FaShoppingCart className="mx-2 text-lg" />
                Orders
              </Link>
            </li>

            <li
              onClick={() => setClosed(true)}
              className="p-3 w-5/6 rounded-md hover:bg-hoverColor"
            >
              <Link to="/payments" className="flex items-center">
                <BsCreditCard2BackFill className="mx-2 text-lg" />
                Payments
              </Link>
            </li>

            <li
              onClick={() => setClosed(true)}
              className="p-3 w-5/6 rounded-md hover:bg-hoverColor "
            >
              <Link to="/category" className="flex items-center">
                <MdDashboard className="mx-2 text-lg" />
                Category
              </Link>
            </li>
            <li
              onClick={() => setClosed(true)}
              className="p-3 w-5/6 rounded-md hover:bg-hoverColor"
            >
              <Link to="/settings" className="flex items-center">
                <FiSettings className="mx-2 text-lg" />
                Settings
              </Link>
            </li>
            <li
              onClick={() => setClosed(true)}
              className="p-3 w-5/6 rounded-md hover:bg-hoverColor"
            >
              <Link to="/log-out" className="flex items-center">
                <FiLogOut className="mx-2 text-lg" />
                Log out
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default SidebarMenu;
