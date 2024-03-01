/*****************************Get ALL Posts*********************/

const getPosts=async()=>{

  const res=await fetch('https://mern-post-app-back-end.onrender.com/api/posts');

  const data=await res.json();

  if(!res.ok){
    throw Error(data.error)
  }

  return data

}


//****************Get Users Post********************* */

const getUsersPost=async()=>{

const res=await fetch('https://mern-post-app-back-end.onrender.com/api/posts/user',{
  headers:{
    "Authorization":`Bearer ${localStorage.getItem('token')}`
  }
})


const data=await res.json();

if(!res.ok){
  throw Error(data.error)
}


return data;

}

//**************Create Post********************************* */

const createPost=async(title,body)=>{

  if(!title || !body){
    throw Error("All Fields Are Required")
  }

  const res= await fetch('https://mern-post-app-back-end.onrender.com/api/posts',{
    method:"POST",
    headers:{
      "Content-Type":"application/json",
      "Authorization":`Bearer ${localStorage.getItem('token')}`,
    },
    body:JSON.stringify({title,body})
  })

  const data= await res.json();

  if(!res.ok){
    throw Error(data.error)
  }

  return data

}

//*****************Delete Post****************************/

const deletePost=async(_id)=>{

  const res=await fetch(`https://mern-post-app-back-end.onrender.com/api/posts/${_id}`,{
    method:"DELETE",
    headers:{
      "Authorization":`Bearer ${localStorage.getItem('token')}`,
    }
  })

  const data= await res.json();

  if(!res.ok){
    throw Error(data.error)
  }

  return data

}

//****************Update Post********************* */

const updatePost=async(_id,title,body)=>{

  if(!title || !body){
    throw Error("All Fields Are Required")
  }

  const res= await fetch(`https://mern-post-app-back-end.onrender.com/api/posts/${_id}`,{
    method:"PUT",
    headers:{
      "Content-Type":"application/json",
      "Authorization":`Bearer ${localStorage.getItem('token')}`,
    },
    body:JSON.stringify({title,body})
  })

  const data= await res.json();

  if(!res.ok){
    throw Error(data.error)
  }

  return data

}

export {getPosts,getUsersPost,createPost,deletePost,updatePost}