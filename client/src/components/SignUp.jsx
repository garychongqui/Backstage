import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';

const SignUp = () => {
  const history = useHistory();
  const [signupData, setSignUpData] = useState({});

  const handleChange = (event) => {
    setSignUpData({ ...signupData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('/api/users/signup', signupData);
    } catch (error) {
      swal('SingUp unsuccessful. Please try again.', { icon: 'error' });
    }

    history.push('/dashboard/events');
  };
  return (
    <div className="signup-container">
      <div className="main-area">
        <form
          className="form"
          name="signup-form"
          method="POST"
          action="/api/users/signup"
          onSubmit={handleSubmit}
        >
          <div className="signup-title">
            <h1 className="text-ob">Welcome Backstage..</h1>
          </div>
          <div className="inner-form">
            <input
              className="text-input"
              type="text"
              placeholder="Username"
              name="name"
              onChange={handleChange}
            />
          </div>
          <div className="inner-form">
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
          <div className="signup-button-area">
            <input type="submit" className="signup-button" value="SignUp" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
