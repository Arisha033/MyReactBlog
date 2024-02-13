import React from 'react'
import { useParams } from 'react-router-dom'

const Post = () => {
  const { postId } = useParams()

  const blogPosts = [
    { id: 1, title: 'First Post', content: 'Content of the first post.' },
    { id: 2, title: 'Second Post', content: 'Content of the second post.' },
    { id: 3, title: 'Third Post', content: 'Content of the third post.' },
    { id: 4, title: 'Forth Post', content: 'Content of the forth post.' },
  ]

  const post = blogPosts.find((p) => p.id.toString() === postId)

  // if (!post) {
  //   return <div>Post not found.</div>
  // }
  return (
    <>
      <h1>Posts</h1>
      <h2>{postId}</h2>
      {blogPosts.map((post) => (
        <>
          <div key={postId}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
          </div>
        </>
      ))}
    </>
  )
}

export default Post
