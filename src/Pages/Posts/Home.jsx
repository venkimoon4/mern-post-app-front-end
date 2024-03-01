import React, { useContext, useEffect, useState } from 'react'
import { getPosts } from '../../controllers/postController'
import { PostContext } from '../../context/PostContext'
import Post from '../../components/Post';
import LoadingSpinner from '../../components/LoadingSpinner';

const Home = () => {

  const {posts,setPosts}=useContext(PostContext);

  const [loading,setLoading]=useState(true);

  useEffect(()=>{
    setTimeout(async()=>{
      const data=await getPosts();
      setPosts(data)
      setLoading(false)
    },2000)
  },[])


  console.log(typeof posts)


  return (
    <div>
      <section className='home-container'>
        <h1 className='heading-title'>Latest Posts Of All Users</h1>

        {loading && <LoadingSpinner/>}

        {posts && posts.map((post)=>{
        return <div className='post-container-main' key={post._id}>
          <Post post={post}/>
        </div>
      })}


      </section>
    </div>
  )
}

export default Home
