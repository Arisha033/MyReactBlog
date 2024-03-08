import { data } from "autoprefixer";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Posts = () => {

  const [posts, setPosts] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=20")
      .then(response => response.json())
      .then((data)=> {
        // console.log(data)
        setPosts(data)
      });
  }, []);

  return (
    <>
    <div className="mt-20 mb-20">
    <h1 className="text-2xl font-semibold text-center my-8">
        Click below to see my recent posts.
      </h1>
      {posts ? (<ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mx-6">
        {posts.map((post) => (
          <li className="bg-white p-6 rounded-md shadow-md" key={post.id}>
            <p className="text-xl font-semibold mb-2" to={`/posts/${post.id}`}>{post.title}
            </p>
            <Link
              to={`/posts/${post.id}`}
              className="mt-4 block text-blue-500 hover:underline"
            >
              Read More
            </Link>
          </li>
        ))}
      </ul>) : (
        <p>Loading...</p>
      )}
    </div>
     
      
    </>
  );
};

export default Posts;
