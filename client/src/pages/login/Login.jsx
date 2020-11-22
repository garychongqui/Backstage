import React from 'react';

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
    </div>
  );
};

export default Login;
