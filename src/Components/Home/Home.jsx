import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  const blogPosts = [
    { id: 1, title: 'First Post', content: 'Content of the first post.' },
    { id: 2, title: 'Second Post', content: 'Content of the second post.' },
    { id: 3, title: 'Third Post', content: 'Content of the third post.' },
    { id: 4, title: 'Forth Post', content: 'Content of the forth post.' },
  ]
  return (
    <>
      <div className="container mx-auto mt-8 text-center justify-center">
        <h2 className="text-3xl font-bold mb-4">Welcome to My Blog</h2>
        <p className="mb-6 mx-8 text-gray-500 w-auto">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam
          illum pariatur harum. Possimus cumque est laudantium dignissimos?
          Sint, obcaecati aliquam! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Sapiente odio sunt ipsam asperiores facere
          consequatur ab dicta quisquam laborum ducimus.
        </p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mx-6">
          {blogPosts.map((post) => (
            <li key={post.id} className="bg-white p-6 rounded-md shadow-md">
              <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
              <p className="text-gray-700">{post.content}</p>
              <Link
                to={`/post/${post.id}`}
                className="mt-4 block text-blue-500 hover:underline"
              >
                Read More
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default Home
