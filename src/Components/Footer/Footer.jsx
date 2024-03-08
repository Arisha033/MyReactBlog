import React from "react";
import { NavLink } from "react-router-dom";
import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="bg-gray-800 text-white p-2 fixed w-full bottom-0">
        <div className="flex flex-row px-4 justify-between">
          <p className="text-center my-2">
            &copy; 2024 Arisha's Blog. All rights reserved.
          </p>
          <div className="my-4">
            <ul className="flex flex-row gap-4 ml-8">
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
  );
};

export default Footer;
