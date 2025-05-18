import React, { useEffect, useState } from 'react'

function PostWithUseEffect() {
  const [data, setData] = React.useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchPosts() {
      const res = await fetch('http://localhost:3000/posts')
      const data = await res.json()
      setData(data)
      setLoading(false)
    }
    fetchPosts()
  }, [])

  if (loading) {
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

export default PostWithUseEffect
