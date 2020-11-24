import axios from 'axios';
import React, { useState, useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import { useHistory } from 'react-router-dom';

const handleLogout = async () => {
  try {
    await axios({
      method: 'post',
      url: '/api/users/logout',
      withCredentials: true
    });
    alert('logout succesful');
  } catch (error) {
    alert(error);
  }
};

const Login = () => {
  const [formData, setFormData] = useState(null);
  const { setCurrentUser } = useContext(AppContext);
  const history = useHistory();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post('/api/users/login', formData);
    setCurrentUser(response.data);
    history.push('/home');
  };
  return (
    <div>
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
      <button onClick={handleLogout}>Log out</button>
    </div>
  );
};

export default Login;
