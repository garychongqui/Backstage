import React from 'react';
import { useHistory } from 'react-router-dom';

const Login = () => {
  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();
    history.push('/dashboard');
  };

  return (
    <div className="container">
      <div className="main-area">
        <form
          onSubmit={handleSubmit}
          className="form"
          name="login-form"
          method="POST"
          action="/api/users/login"
        >
          <div className="inner-form">
            <h1 className="text-ob">Welcome Backstage</h1>
            <input
              className="text-input"
              type="email"
              placeholder="Email"
              name="email"
            />
          </div>
          <div className="inner-form">
            <input
              type="password"
              name="password"
              className="text-input"
              placeholder="Password"
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
