import React, { useContext, useRef, useState } from "react";
import Alert from "../../components/Alert";
import { registerUser } from "../../controllers/usersController";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

const Register = () => {
  const [error, setError] = useState(null);

  const {user,setUser}=useContext(UserContext);

  const navigate=useNavigate();

  const email = useRef();
  const password = useRef();
  const confirmPassword = useRef();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await registerUser(
        email.current.value,
        password.current.value,
        confirmPassword.current.value
      );
      setUser({email:email.current.value,posts:[]})
      navigate('/dashboard')
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      <div className="container">
        <form onSubmit={handleRegister}>
          <p>Register</p>

          <div>
            <label>Email</label>
            <input type="email" ref={email} placeholder="email" />
          </div>
          <div>
            <label>Password</label>
            <input type="password" ref={password} placeholder="password" />
          </div>
          <div>
            <label>Confirm Password</label>
            <input
              type="password"
              ref={confirmPassword}
              placeholder="confirm password"
            />
          </div>
          <button>Register</button>

          {error && <Alert msg={error} />}
        </form>
      </div>
    </>
  );
};

export default Register;
