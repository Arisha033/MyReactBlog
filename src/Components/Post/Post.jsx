import React from 'react'
import { useParams } from 'react-router-dom'

const Post = () => {
  const { postId } = useParams()

  const blogPosts = [
    { id: 1, title: 'First Post', content: 'Content of the first post.' },
    { id: 2, title: 'Second Post', content: 'Content of the second post.' },
  ]

  const post = blogPosts.find((p) => p.id.toString() === postId)

  if (!post) {
    return <div>Post not found.</div>
  }
  
  return (
    <>
      <h1>Post</h1>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
    </>
  )
}

export default Post
