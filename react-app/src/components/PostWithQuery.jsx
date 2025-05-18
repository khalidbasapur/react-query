import { useQuery } from '@tanstack/react-query'
import React from 'react'

export default function PostWithQuery() {
  const { data, isLoading } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
  })

  async function fetchPosts() {
    const res = await fetch('http://localhost:3000/posts')
    return res.json()
  }

  if (isLoading) {
    return <h1>Loading....</h1>
  }

  return (
    <div>
      {data?.map(post => (
        <React.Fragment key={post.id}>
          <div className="card">
            <h3>{post.title}</h3>
            <div>{post.body}</div>
          </div>
          <hr />
        </React.Fragment>
      ))}
    </div>
  )
}
