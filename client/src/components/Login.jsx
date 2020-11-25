import axios from 'axios';
import React from 'react';

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
  return (
    <div>
      <form name="login-form" method="POST" action="/api/users/login">
        <input type="email" placeholder="email" name="email" id="email" />
        <input
          type="password"
          placeholder="password"
          name="password"
          id="password"
        />
        <input type="submit" name="submit" />
      </form>
      <button onClick={handleLogout}>Log out</button>
    </div>
  );
};

export default Login;
