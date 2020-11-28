import React from 'react';
import { useHistory } from 'react-router-dom';

const SignUp = () => {
  const history = useHistory();
  return (
    <div className="container">
      <div className="main-area">
        <form
          className="form"
          name="signup-form"
          method="POST"
          action="/api/users/signup"
        >
          <div className="inner-form">
            <h1 className="text-ob">Welcome Backstage</h1>
            <input
              className="text-input"
              type="text"
              placeholder="Username"
              name="name"
            />
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
            <input
              type="submit"
              className="btn-1"
              value="SignUp"
              onClick={() => {
                history.push('/dashboard/events');
              }}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
