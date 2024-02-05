import React from 'react'
import { Link } from 'react-router-dom'

const Author = () => {
  return (
    <>
      <div className="container mx-auto mt-8">
        <div className="bg-white p-6 rounded-md shadow-md flex flex-col justify-center">
          <h2 className="text-2xl font-bold mb-4">About the Author</h2>
          <img
            src="https://avatars.githubusercontent.com/u/128699505?v=4"
            alt="author-img"
            className="mb-4 rounded-lg w-32"
          />
          <p className="text-gray-700">
            Hi, I'm Arisha, Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Illo adipisci at enim corrupti asperiores id quas officia
            saepe, perferendis veritatis?
          </p>
          <p className="text-gray-400 my-2">Connect with me on social media:</p>
          <div className="flex space-x-4">
            <Link to="#" className="text-blue-700 hover:font-bold">
              Twitter
            </Link>
            <Link to="#" className="text-blue-700 hover:font-bold">
              LinkedIn
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Author
