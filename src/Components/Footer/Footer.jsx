import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa'

const Footer = () => {
  return (
    <>
      <footer className="bg-gray-800 text-white p-2 fixed w-full bottom-0">
        <div className="container mx-auto">
          <p className="text-center my-2">
            &copy; 2024 Arisha's Blog. All rights reserved.
          </p>
          <div className="flex justify-between gap-6 my-6">
            <ul className="text-gray-500 font-medium flex gap-4">
              <ul className="text-gray-500 font-medium ml-4">
                <li className="mb-4">
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
              </ul>
              <li className="mb-4">
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
            <ul className="flex flex-row gap-4 mr-8">
              <li>
                <FaFacebook size={20} />
              </li>
              <li>
                <FaLinkedin size={20} />
              </li>
              <li>
                <FaGithub size={20} />
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
