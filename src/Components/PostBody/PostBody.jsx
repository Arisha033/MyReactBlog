import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const Post = () => {
  const { postId } = useParams();
  const [post, setPost] = useState();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPost(data);
      });
  }, [postId]);

  return (
    <>
    <div>
      {post ? (
        <>
        <div className="flex flex-col text-center justify-center items-center h-[60vh]">
        <h2 className="text-lg font-bold">{post.title}</h2>
        <h1 className="max-w-[40rem] text-justify">{post.body}</h1>
        </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
    </>
  );
};

export default Post;
