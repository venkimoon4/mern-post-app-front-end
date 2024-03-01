import React, {useState } from 'react'
import Alert from '../../components/Alert';
import { updatePost } from '../../controllers/postController';
import { useLocation, useNavigate } from 'react-router-dom';

const Update = () => {

  const [error,setError]=useState(null);
  const navigate=useNavigate();

  const {state}=useLocation();
  console.log(state)

  const [title,setTitle]=useState(state.title);
  const [body,setBody]=useState(state.body);

  const handleUpdate=async(e)=>{
    e.preventDefault();

    try{
      const data= await updatePost(state._id,title,body);
      navigate('/dashboard')
    }
    catch(error){
      setError(error.message)
    }
  }

  return (
    <div>
      <div className='container'>
      <form onSubmit={handleUpdate}>
        
        <p>Update a Post</p>

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

export default Update
