import axios from 'axios';
import React from 'react';

const handleLogin = async () => {
  try {
    await axios({
      method: 'post',
      url: '/api/users/login',
      withCredentials: true
    });
    alert('login succesful');
  } catch (error) {
    alert(error);
  }
};

const Login = () => {
  return (
    <div className="container">
      <div className="main-area">
        <form className="form">
          <div className="inner-form">
            <h1 className="text-ob">Welcome Backstage</h1>
            <input
              type="email"
              name="email"
              id=""
              className="text-input"
              placeholder="Enter your e-mail"
            />
          </div>
          <div className="inner-form">
            <input
              type="password"
              name="email"
              id=""
              className="text-input"
              placeholder="Enter your password"
            />
          </div>
          <div className="btn-area">
            <button onClick={handleLogin} className="btn-3" type="button">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
