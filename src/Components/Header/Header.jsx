import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <header className="bg-gray-800 text-white p-4 sticky">
        <nav className="container mx-auto">
          <div className="flex justify-between items-center">
            <Link to="/" className="text-xl font-bold">
              Arisha's Blog
            </Link>
            <ul className="flex space-x-4 mr-6">
              <li>
                <Link to="/" className="hover:text-gray-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="post" className="hover:text-gray-300">
                  Posts
                </Link>
              </li>
              <li>
                <Link to="author" className="hover:text-gray-300">
                  Author
                </Link>
              </li>
              <li>
                <Link to="contact" className="hover:text-gray-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Header
