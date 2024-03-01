//****************************User Login***************************//

const loginUser=async(email,password)=>{

  if(!email || !password){
    throw Error('All Fields Are Required')
  }

  const res=await fetch('https://mern-post-app-back-end.onrender.com/api/users/login',{

    method:"POST",
    headers:{
      'Content-Type':'application/json',
    },
    body:JSON.stringify({email,password})
  })

  const data=await res.json();

  if(!res.ok){
    throw Error(data.error)
  }

  localStorage.setItem('email',data.email);
  localStorage.setItem('token',data.token);

  console.log(data)

  return data

}


//*************************Register User**************************** */

const registerUser=async(email,password,confirmPassword)=>{

if(!email || !password || !confirmPassword){
  throw Error('All Fields Are Required')
}

if(password!==confirmPassword){
  throw Error("Password's Doesnt Match")
}

const res=await fetch('https://mern-post-app-back-end.onrender.com/api/users/',{

  method:"POST",
  headers:{
    'Content-Type':'application/json',
  },
  body:JSON.stringify({email,password})
})

const data=await res.json();

if(!res.ok){
  throw Error(data.error)
}

localStorage.setItem('email',data.email);
localStorage.setItem('token',data.token);

return data

}

export {loginUser,registerUser}

