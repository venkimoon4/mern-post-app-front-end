import React, { useContext, useState } from 'react'
import Alert from '../../components/Alert';
import { createPost } from '../../controllers/postController';
import { PostContext } from '../../context/PostContext';
import { useNavigate } from 'react-router-dom';

const Create = () => {

  const [error,setError]=useState(null);
  const {posts,setPosts}=useContext(PostContext);
  const navigate=useNavigate();

  const [title,setTitle]=useState("");
  const [body,setBody]=useState("");

  const handleCreate=async(e)=>{
    e.preventDefault();

     
    try{
      const data= await createPost(title,body);
      setPosts([...posts,data.savedPost])
      navigate('/dashboard')
    }
    catch(error){
      setError(error.message)
    }
  }

  return (
    <div>
      <div className='container'>
      <form onSubmit={handleCreate}>
        
        <p>Create a Post</p>

        <div>
          <label>Title</label>
        <input type='text' value={title} onChange={(e)=>setTitle(e.target.value)} placeholder='Title'/>
        </div>
        <div>
        <label className='textarea-label'>Post Content</label>
        <textarea className='textarea' rows="4" type='text' value={body} onChange={(e)=>setBody(e.target.value)}  placeholder='Post Content'/>
        </div>
        <button>Create</button>

       {error && <Alert msg={error}/>}

      </form>
    </div>
    </div>
  )
}

export default Create
