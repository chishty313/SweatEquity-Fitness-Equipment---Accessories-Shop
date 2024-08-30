import SweatEquity from "../assets/images/SweatEquity.png";

import { useState } from "react";
import { Menu, Search, ShoppingBag } from "lucide-react";

const Navbar = () => {
  return (
    <>
      <header>
        <div>
          <div>
            <div>
              <button type="button">
                <Menu />
              </button>

              <div className="flex items-center flex-shrink-0 ml-4 lg:ml-0">
                <a
                  href="/"
                  className="inline-flex rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                >
                  <span className="sr-only">SweatEquity Logo</span>
                  <img className="w-auto h-8" src={SweatEquity} alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
