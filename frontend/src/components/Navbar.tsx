import SweatEquity from "../assets/images/SweatEquity.png";

import { useState } from "react";
import { Menu, Search, ShoppingBag } from "lucide-react";
// import { useLocation } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  // const isHomePage = location.pathname === "/";

  const navItems = [
    { label: "All Category", href: "#" },
    { label: "All Category", href: "#" },
    { label: "All Category", href: "#" },
    { label: "All Category", href: "#" },
    { label: "All Category", href: "#" },
  ];

  return (
    <>
      <header>
        <div className="bg-white border-b border-gray-100">
          <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div className="flex items-center justify-between h-16 lg:h-[72px]">
              <button
                type="button"
                className="p-2 -m-2 text-gray-900 transition-all duration-200 lg:hidden hover:text-gray-700"
                onClick={toggleMenu}
              >
                <Menu className="w-6 h-6" />
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

              <div className="flex items-center justify-end ml-auto">
                <div className="hidden lg:flex lg:items-center lg:space-x-8">
                  <a
                    href="#"
                    className="text-base font-medium text-gray-900 transition-all duration-200 rounded hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                  >
                    Product Management
                  </a>
                  <a
                    href="#"
                    className="text-base font-medium text-gray-900 transition-all duration-200 rounded hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                  >
                    Login
                  </a>
                </div>

                <div className="flex items-center justify-end space-x-5">
                  <span
                    className="w-px h-6 bg-gray-200 lg:hidden"
                    aria-hidden="true"
                  ></span>
                  <button
                    type="button"
                    className="p-2 -m-2 text-gray-900 transition-all duration-200 hover:text-gray-700"
                  >
                    <Search className="w-6 h-6" />
                  </button>
                  <span
                    className="w-px h-6 bg-gray-200 lg:hidden"
                    aria-hidden="true"
                  ></span>

                  <button
                    type="button"
                    className="inline-flex items-center p-2 -m-2 text-gray-900 transition-all duration-200 lg:ml-6 hover:text-gray-700"
                  >
                    <ShoppingBag className="w-6 h-6" />
                    <span className="inline-flex items-center justify-center w-5 h-5 ml-1 text-xs font-bold text-white bg-gray-600 rounded-full">
                      2
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="relative pt-12 bg-gray-50">
        <div className="absolute inset-x-0 top-0 hidden lg:block">
          <div className="py-5">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
              <nav className="flex items-center space-x-8">
                {navItems.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="text-sm font-medium text-gray-900 transition-all duration-200 rounded hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile View */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-white lg:hidden">
          <div className="p-4">
            <button
              type="button"
              className="p-2 text-gray-900 transition-all duration-200 hover:text-gray-700"
              onClick={toggleMenu}
            >
              Close
            </button>
            <nav className="mt-4 space-y-4">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="block text-base font-medium text-gray-900 transition-all duration-200 hover:text-gray-700"
                  onClick={toggleMenu}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
