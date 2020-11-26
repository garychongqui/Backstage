import axios from 'axios';
import React, { useState, useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { useHistory } from 'react-router-dom';

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
  const [formData, setFormData] = useState(null);
  const { setCurrentUser } = useContext(AppContext);
  const history = useHistory();

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await axios.post('/api/users/login', formData);
    setCurrentUser(response.data);
    history.push('/home');
  };
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

      {/*   <div>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="email"
          name="email"
          id="email"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          id="password"
          onChange={handleChange}
        />
        <input type="submit" name="submit" />
      </form>
      <button onClick={handleLogout}>Log out</button> */}
    </div>
  );
};

export default Login;
