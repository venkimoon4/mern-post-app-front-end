import React, { useContext, useRef, useState } from 'react'
import Alert from '../../components/Alert';
import { loginUser } from '../../controllers/usersController';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';

const Login = () => {

  const[error,setError]=useState(null);

  const {user,setUser}=useContext(UserContext);

  const navigate=useNavigate();

  const email=useRef();
  const password=useRef();

  const handleLogin=async(e)=>{

    e.preventDefault();

    try{
     await loginUser(email.current.value,password.current.value);
     navigate('/dashboard')
     setUser({email:email.current.value,posts:[]})
    }
    catch(error){
    setError(error.message)
    }

  }

  return (
    <>
    
    <div className='container'>
      <form onSubmit={handleLogin}>
        
        <p>Login</p>

        <div>
          <label>Email</label>
        <input type='email' ref={email} placeholder='email'/>
        </div>
        <div>
        <label>Password</label>
        <input type='password' ref={password} placeholder='password'/>
        </div>
        <button>Login</button>

       {error && <Alert msg={error}/>}

      </form>
    </div>
    </>
  )
}

export default Login
