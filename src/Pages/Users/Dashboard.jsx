import React, { useContext, useEffect, useState } from 'react'
import { deletePost, getUsersPost } from '../../controllers/postController'
import { UserContext } from '../../context/UserContext'
import Post from '../../components/Post';
import { Link } from "react-router-dom"
import LoadingSpinner from '../../components/LoadingSpinner';
import { FaRegPenToSquare } from "react-icons/fa6";
import { CiTrash } from "react-icons/ci";

const Dashboard = () => {

  const {user,setUser}=useContext(UserContext);

  const [loading,setLoading]=useState(true);

  useEffect(()=>{
   
    setTimeout(async()=>{
      const {email,userPosts}=await getUsersPost();
       setLoading(false)
       setUser({email:email,posts:userPosts})
    },2000)

  },[])

  const handleDelete=async(id)=>{
   
    try{
      const {success}=await deletePost(id);
      console.log(success)
    }
    catch(error){
      console.log(error.message)
    }

    const newPosts=user.posts.filter((post)=>post._id!==id);

    setUser({...user,posts:newPosts})
  }


  return (
    <div className='home-container'>

      <div className='user-dashboard'><p className='user-email'><span>{user.email}</span> Posts</p></div>

      {loading===true && <LoadingSpinner/>}

       {user.posts && user.posts.map((post)=>{
        return <div key={post._id} className='post-container-main'>
          <Post post={post}>
            <div>
              <div>
              </div>
              <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
              <Link state={post} to="/update" style={{color:"white"}} title='dashboard' className='nav-link'>
                <FaRegPenToSquare style={{fontSize:"1.2rem"}}/>
              </Link>
              <button onClick={()=>handleDelete(post._id)} className='nav-link' style={{color:"white"}}>
                <CiTrash style={{fontSize:"1.5rem"}}/>
              </button>
              </div>
            </div>
          </Post>
        </div>
      })}


      
    </div>
  )
}

export default Dashboard
Dashboard