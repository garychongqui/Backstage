import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const history = useHistory();
  const [loginData, setLoginData] = useState({});

  const handleChange = (event) => {
    setLoginData({ ...loginData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('/api/users/login', loginData);
    } catch (error) {
      alert('Login unsuccessful. Please try again.');
    }

    history.push('/dashboard/events');
  };

  return (
    <div className="login-container">
      <div className="main-area">
        <form
          className="form"
          name="login-form"
          method="POST"
          action="/api/users/login"
          onSubmit={handleSubmit}
        >
          <div className="inner-form">
            <h1 className="text-ob">Welcome Backstage</h1>
            <input
              className="text-input"
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
            />
          </div>
          <div className="inner-form">
            <input
              type="password"
              name="password"
              className="text-input"
              placeholder="Password"
              onChange={handleChange}
            />
          </div>
          <div className="btn-area">
            <input type="submit" className="btn-1" value="Login" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
