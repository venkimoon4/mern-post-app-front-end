import React from 'react'

const Post = ({post,children}) => {
  return (

    <div className='post-container'>

     {/* <div className='post-details-container'>
      <div>
       <h2>{post.title}</h2>
       <p>{new Date(post.createdAt).toLocaleDateString()}</p>

      </div>

      <div>
        {children}
      </div>
    </div>

    <p className='post-body'>{post.body}</p> */}

    {/* <hr/> */}

  <div class="card text-bg-primary mb-3" style={{maxWidth: "18rem"}}>
  <div class="card-body">
    <h5 class="card-title">{post.title}</h5>
    <p>{new Date(post.createdAt).toLocaleDateString()}</p>
    <div class="card-header">{children}</div>
    <p class="card-text">{post.body}</p>
  </div>
</div>

</div>

  )
}

export default Post
