import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="bg-gray-800 text-white p-4 fixed w-full top-0">
        <nav className="container mx-auto">
          <div className="flex justify-between items-center">
            <Link to="/" className="text-xl font-bold">
              Arisha's Blog
            </Link>
            <ul className="flex space-x-4 mr-6">
              <li>
              <NavLink
                    to="/"
                    className={({ isActive }) =>
                      `hover:text-white ${
                        isActive ? 'text-white' : 'text-gray-400'
                      }`
                    }
                  >
                    Home
                  </NavLink>
              </li>
              <li>
              <NavLink
                  to="/posts"
                  className={({ isActive }) =>
                    `hover:text-white ${
                      isActive ? 'text-white' : 'text-gray-400'
                    }`
                  }
                >
                  Posts
                </NavLink>
              </li>
              <li>
              <NavLink
                  to="/author"
                  className={({ isActive }) =>
                    `hover:text-white ${
                      isActive ? 'text-white' : 'text-gray-400'
                    }`
                  }
                >
                  Author
                </NavLink>
              </li>
              <li>
              <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `hover:text-white ${
                      isActive ? 'text-white' : 'text-gray-400'
                    }`
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
